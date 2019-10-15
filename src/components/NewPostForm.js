import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class NewPostForm extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <h3>Add a Post!</h3>
          <FormGroup>
            <Label for="title">Title:</Label>
            <Input type="text" placeholder="You're post's title..." />
          </FormGroup>
          <FormGroup>
            <Label for="body">Body:</Label>
            <Input type="textarea" placeholder="You're post's body..." />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default NewPostForm;
