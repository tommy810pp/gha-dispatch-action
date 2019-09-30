const Octokit = require('@octokit/rest');
const run = async () => {
  console.log('token', process.env.GITHUB_TOKEN);
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  const result = await octokit.repos.createDispatchEvent({
    owner: 'Pay-Baymax',
    repo: 'payment-test',
    event_type: 'integration_test'
  });

  console.log(result);
}

run().catch(err => {
  console.log(err);
});
