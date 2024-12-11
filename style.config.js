import StyleDictionary from "style-dictionary";

StyleDictionary.registerTransform({
  type: "value",
  transitive: true,
  name: "tailwind/fontSize",
  filter: (token) => {
    return token.type === "typography";
  },
  transform: (token) => {
    const {fontWeight, fontSize, lineHeight} = token.value;
    return [fontSize, {lineHeight, fontWeight}];
  },
});

const sdConfig = {
  source: ["./tokens/**/*.json"],
  platforms: {
    js: {
      buildPath: "./styles/",
      transformGroup: "js",
      transforms: ["tailwind/fontSize"],
      files: [
        {
          format: "javascript/esm",
          destination: "colors.js",
          options: {
            minify: true,
          },
          filter: {
            type: "color",
          },
        },
        {
          format: "javascript/esm",

          destination: "fontSize.js",
          options: {
            minify: true,
          },
          filter: {
            type: "typography",
          },
        },
      ],
    },
  },
};
const sd = new StyleDictionary(sdConfig);
await sd.buildAllPlatforms();
