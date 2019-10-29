import React, { FunctionComponent } from "react";
import { Button, Input, Form } from "antd";
import { FormComponentProps } from "antd/lib/form/Form";

interface Props extends FormComponentProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

const NewTaskForm: FunctionComponent<Props> = ({ onChange, onAdd }) => {
  return (
    <Form onSubmit={onAdd} id="FormSubmit" layout="inline">
      <Form.Item>
        <Input onChange={onChange} style={{ width: "500px" }} allowClear />
      </Form.Item>
      <Form.Item>
        <Button form="FormSubmit" key="submit" htmlType="submit" type="primary">
          Add a task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create<Props>()(NewTaskForm);
