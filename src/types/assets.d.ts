// Ambient declarations for side-effect asset imports.
// Required because tsconfig enables `noUncheckedSideEffectImports`, which would
// otherwise error on `import "./globals.css"`.
declare module "*.css";
