import { Input, Button, Form } from './SearchForm.styled';

export const SearchForm = ({ onSubmit, value }) => {
    return (
            <Form onSubmit={onSubmit}>
                <Input type="text" name="input" defaultValue={value} required></Input>
                <Button type="submit">Search</Button>
            </Form>
    )
}