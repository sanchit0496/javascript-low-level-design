interface Observer{
    update(): void
}

class Central{  

    private observerList: Observer[] = []

    add(observer: Observer): void{
        this.observerList.push(observer)
    }
    remove(observer: Observer): void{
        this.observerList = this.observerList.filter((ob) => ob !== observer)
    }

    notify(): void{
        console.log('updated')
        this.observerList.forEach((ob) => ob.update())
    }
    display(){
        console.log(this.observerList)
    }
}

class DashboardObserver implements Observer{
    update(): void{
        console.log('dashboard update')
    }
}

class MobileObserver implements Observer{
    update(): void{
        console.log('mobile update')  
    }
} 

function main(): void{
    const mobile = new MobileObserver()
    const dashboard = new DashboardObserver()
    const central = new Central()
    central.add(mobile)
    central.add(dashboard)
    central.notify()
    central.display()
}

main()