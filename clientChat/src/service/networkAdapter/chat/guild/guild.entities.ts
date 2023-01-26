export interface IGuildCreate {
  title: string;
}

export interface IGuild {
  title: string;
  uuid: string;
  ownerId: number;
}

export interface IGuildId extends IGuild {
  id: number;
}
