export default defineContentScript({
  matches: ['*://zenn.dev/*'],
  main() {
    console.log('Hello content.');
  },
});
