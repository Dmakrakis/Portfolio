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
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
