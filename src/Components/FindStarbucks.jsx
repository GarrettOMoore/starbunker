import React, { Component } from 'react';
import { Card, InputGroup, FormControl, Button } from 'react-bootstrap';

const FindStarbucks = (props) => {
    return (
        <>
        <Card >
          <InputGroup size="sm" className="md-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">Find A Starbunker Near You</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </ Card>
        </>
    )
}

export default FindStarbucks