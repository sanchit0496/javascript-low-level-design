// without DRY
class User{
    email: string

    constructor(email:string){
        this.email = email
    }
}

class Auth{

    register(user: User){
        if(!user.email || !user.email.includes('@')){
            console.log('please enter a valid email')
        } 
        else{
            console.log('okay register')
        }
    }

}
class Subscribe{

    subscribe(user: User): void{
        if(!user || !user.email.includes('@')){
            console.log('please enter a valid email')
        }else{
            console.log('okay subscribe')
        }
    }

}

function main(): void{
    const user1 = new User('test@gmail.com')
    const user2 = new User('test')
    const auth = new Auth();
    auth.register(user1)
    const subscribe = new Subscribe()
    subscribe.subscribe(user2)
}
main()


// with DRY
class User{
    email: string

    constructor(email:string){
        this.email = email
    }
}

class ValidateEmail{
    private email: string;

    constructor(email: string){
        this.email = email
    }

    static validateEmail(email: string){
        if(!email || !email.includes('@')){
            console.log('please enter a valid email')
        } 
        else{
            console.log('okay register')
        }
    }
}

class Auth{
    register(email: string){
        ValidateEmail.validateEmail(email)
    }
}

class Subscribe{
  subscribe(email: string){
        ValidateEmail.validateEmail(email)
    }
}

function main(): void{
    const auth = new Auth();
    auth.register('test')
    
    const subscribe = new Subscribe()
    subscribe.subscribe('test@gmail.com')
}
main()


// When we use a helper class like ValidateEmail, making the method static is better because it avoids unnecessary object creation. A static method can be called directly on the class, which makes the code cleaner and more efficient since no state is being stored. If we used a normal (non-static) method, we’d have to create a new object of ValidateEmail each time, even though the class doesn’t hold any data. So, static is the right choice for utility or helper functions, while non-static methods are meant for cases where each object maintains its own state