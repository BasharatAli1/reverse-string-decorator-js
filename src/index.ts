function split(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any []) {
        const [arg] = args;
        const splittedArg = arg.split('');
        originalMethod.apply(this, [splittedArg]);
    }
}

function reverse(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any []) {
        const [arg] = args;
        const reversedArg = arg.reverse();
        originalMethod.apply(this, [reversedArg]);
    }
}

function join(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any []) {
        const [arg] = args;
        const joinedArg = arg.join('');
        originalMethod.apply(this, [joinedArg]);
    }
}

class StringManager {
    @split
    @reverse
    @join
    print(str: string): void {
        console.log(str);
    }
}

const stringManager = new StringManager();
stringManager.print('hello');