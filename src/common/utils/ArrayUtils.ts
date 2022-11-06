import { InvalidArgumentException } from '../exceptions/InvalidArgumentException';

export class ArrayUtils {
    static findInArray<T>(arr: Array<T>, attr: string, value: any): T | undefined {
        return arr?.find((elt: T) => {
            if (!(attr in elt)) {
                throw new InvalidArgumentException(`Attribute ${attr} not a key of object`);
            }
            return elt[attr as keyof typeof elt] === value
        });
    }
}

