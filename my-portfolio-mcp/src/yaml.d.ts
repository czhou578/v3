// Cloudflare Workers text module rule for *.yaml files
declare module "*.yaml" {
  const content: string;
  export default content;
}
