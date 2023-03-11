
import EditForm from "./EditForm";
import TodoItem from "./TodoItem";

const Todos = ({ todos}) => {
    return (
        <div className="flex flex-col space-y-3 mt-5 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 md:space-y-0">
            {todos.map((todo) => {
                return <TodoItem key={todo._id} {...todo} />;
            })}
            
        </div>
    );
};

export default Todos;
