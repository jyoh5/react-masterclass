import React from "react";
import {useForm} from "react-hook-form";


interface iForm {
    toDo: string;
    toDoSecond: string;
    email: string;
    extraError?: string;
}

function ToDoList() {
    const { register, handleSubmit, formState:{errors}, setError } = useForm<iForm>({
        defaultValues: {
            email: "@naver.com",
        }
    });
    const onValid = (data:iForm) => {
        if(data.toDo !== data.toDoSecond){
            setError("toDoSecond", {message: "toDoSecond are not the same."}, {shouldFocus: true});
        }
        // setError("extraError", {message: "Server offline."});
    };
    console.log(errors);
    // const [toDo, setToDo] = useState("");
    // const [toDoError, setToDoError] = useState("");
    // const onChange = (e:React.FormEvent<HTMLInputElement>) => {
    //     const {currentTarget: {value}} = e;
    //     setToDoError("");
    //     setToDo(value);
    // };
    // const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     if (toDo.length < 10){
    //         return setToDoError("To do should be longer");
    //     }
    //     console.log(toDo);
    // };
    return (
        <div>
            <form onSubmit={handleSubmit(onValid)} style={{display:"flex", flexDirection: "column" }}>
                <input {...register("toDo", {
                        required: true, 
                        minLength: 10, 
                        validate: {
                            noNico: (value) => value.includes("nico") ? "No nico" : true,
                            noNaco: (value) => value.includes("naco") ? "No naco" : true,
                        }})
                    } 
                    placeholder="Write a to do" />
                <span>{errors?.toDo?.message}</span>
                <input {...register("toDoSecond", {
                        required: "toDoSecond is required.", 
                        minLength: { value: 10, message: "Your toDoSecond is too short."}})
                    } 
                    placeholder="Write a to do" />
                <span>{errors?.toDoSecond?.message}</span>
                <input {...register("email", {
                        required: "Email is required.", 
                        pattern: { 
                            value: /^[A-Za-z0-9._%+-]+@naver.com$/, 
                            message: "Only naver.com emails allowed." }})
                    } 
                    placeholder="Write a Email" />
                <span>{errors?.email?.message}</span>
                <button>Add</button>
                <span>{errors?.extraError?.message}</span>
            </form>
        </div>
    );
}

export default ToDoList;