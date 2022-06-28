// Outside Components
import { Dropdown, FormControl } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { DropdownButton, InputGroup, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// Custom Components
import DishDisplay from './DishDisplay';
// CSS
import styles from './SearchDishes.module.css';

// TODO onChange seems like it generates a crazy number of db requests
// Also its a bit flaky
// Maybe change to a submit button, OR cache all results locally and search the cache

function DishSearch() {
  // Search text, type, and results saved in state with initial values
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('en');
  const [searchResults, setSearchResults] = useState([]);

  // Handles changes to the search field
  const handleInput = async (event) => {
    setSearchTerm(event.target.value);
  };

  // Handles selection of the radio buttons
  const handleChange = (event) => {
    setSearchType(event.target.value);
  };

  // Run the search whenever either the search type or text changes
  useEffect(() => {
    getSearchResults(searchTerm);
  }, [searchTerm, searchType]);

  const getSearchResults = async (searchTerm) => {
    // Ensure the search field has a value
    // TODO regex to check if it is all spaces (should be treated as empty)
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    // Search by search type and text
    const result = await fetch(`https://menu-translation-backend.herokuapp.com/dishes?${searchType}=${searchTerm}`, {
      method: 'GET',
    });

    const json = await result.json();

    setSearchResults(json);
  };

  return (
    <div>
      <h1 className={styles.title}>Search Dishes</h1>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="" controlId="formSearch">
          <Row className={styles.row1}>
            <Col xs="auto" className={styles.col1}>
              <Form.Select className={styles.searchLanguage} size="sm" value={searchType} onChange={handleChange}>
                <option value="en">English</option>
                <option value="zhtw">Chinese</option>
                <option value="pinyinNoDiacritics">Hanyu Pinyin</option>
              </Form.Select>
            </Col>
            <Col xs="auto" className={styles.col2}>
              <FormControl
                size="sm"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onInput={handleInput}
                className={styles.searchText}
              />
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <DishDisplay dishes={searchResults} />
    </div>
  );
}

export default DishSearch;
