export interface Service {
  title: string;
  summary: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Road Freight",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.",
    features: ["Full truckload (FTL)", "Part load (LTL)", "Scheduled routes", "Real-time updates"],
  },
  {
    title: "Cross-Border Transport",
    summary:
      "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.",
    features: ["Customs clearance support", "SADC coverage", "Permit handling", "Border tracking"],
  },
  {
    title: "Warehousing",
    summary:
      "Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo.",
    features: ["Secure storage", "Inventory management", "Pick and pack", "24/7 surveillance"],
  },
  {
    title: "Distribution",
    summary:
      "Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod.",
    features: ["Last-mile delivery", "Multi-drop routes", "Proof of delivery", "Flexible scheduling"],
  },
  {
    title: "Abnormal Loads",
    summary:
      "Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor.",
    features: ["Oversized cargo", "Escort vehicles", "Route planning", "Specialised trailers"],
  },
  {
    title: "Fleet Hire",
    summary:
      "Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    features: ["Dedicated vehicles", "Trained drivers", "Short and long term", "Maintenance included"],
  },
];