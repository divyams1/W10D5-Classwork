import { connect } from 'react-redux';
import  TodoList from './todo_list';
import {allTodos} from "../../reducers/selectors";
import {recieveTodo} from "../../actions/todo_actions";

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    receiveTodo: (todo) => dispatch(receieveTodo(todo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((TodoList));