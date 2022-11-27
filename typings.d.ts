interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: { string; _ref: string; _type: "reference" };
}

interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
