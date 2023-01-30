interface IGenPromise<T> {
        data : {
            data : T;
            msg : string;
            code?: string;
            errors ?: any[];
        }
}

export default IGenPromise;