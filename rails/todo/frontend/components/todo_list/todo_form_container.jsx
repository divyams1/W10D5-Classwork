import { connect } from 'react-redux';
import {receiveTodo} from '../../actions/todo_actions';
import AddTodoForm from './todo_form';

const mapDispatchToProps = (dispatch) => {
    return {
       receiveTodo: (todo) => {
           return dispatch(receiveTodo(todo))
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodoForm);