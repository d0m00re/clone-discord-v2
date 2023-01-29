interface IGenPromise<T> {
        data : T;
        msg : string;
        code?: string;
        errors ?: any[]
}

export default IGenPromise;