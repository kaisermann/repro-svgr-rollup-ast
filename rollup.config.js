import svgr from "@svgr/rollup";

export default {
  input: {
    icons: "./src/icons.js",
  },
  output: [
    {
      dir: "esm/",
      format: "esm",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
  ],
  plugins: [
    svgr({
      // We have our own babel pipeline
      babel: false,
      // Accepts a "title" prop and pass it down
      // See https://react-svgr.com/docs/options/#title
      titleProp: true,
      // todo: do we need to export typings for these icons? could just add a svg.d.ts on our app
      // typescript: true,
      // ext: 'tsx',
    }),
  ],
};
