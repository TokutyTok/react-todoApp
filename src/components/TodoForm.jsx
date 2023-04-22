export const TodoForm = (props) => {
    return (
        <>  <div>
                <label>TODO_FORM</label>
                <input placeholder="TODO" value={props["input"]} />
            </div>
        </>
    );
}