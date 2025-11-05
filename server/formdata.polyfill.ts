export default defineNitroPlugin(async () => {
  // Node n'a pas FormData natif dans tous les runtimes SSR de build/dev
  if (typeof (globalThis as any).FormData === 'undefined') {
    const FormData = (await import('form-data')).default as any;
    (globalThis as any).FormData = FormData;
  }
});
