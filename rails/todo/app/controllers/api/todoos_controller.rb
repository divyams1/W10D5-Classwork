class Api::TodoosController < ApplicationController 
    def index 
        todos = Todoo.all 
        render json: {todos: todos}
    end 

    def show 
        render json: Todoo.find(params[:id])
    end 

    def create 
        @todo = Todoo.new(todo_params)
        if @todo.save
            render json: @todo 
        else  
            render json: @todo.errors.full_messages, status: 422
        end 
    end 

    # def update 

    # end 

    # def destroy 

    # end 

    private 
    def todo_params
        params.require(:todo).permit(:name, :body, :done)
    end 
end