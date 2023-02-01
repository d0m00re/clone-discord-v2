interface IChatElemSelection {
    guildUuid : string;
    roomUuid : string;
}

const makeEmpty = () : IChatElemSelection => {
    return ({
        guildUuid : "",
        roomUuid : ""
    })
};

// find guild id

// find room id



export type {
    IChatElemSelection
}

export {
    makeEmpty
}