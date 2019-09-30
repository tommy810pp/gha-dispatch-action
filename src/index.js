const Octokit = require('@octokit/rest');
const run = async () => {
  console.log('token', process.env.GITHUB_TOKEN);
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  });

  const result = await octokit.repos.createDispatchEvent({
    owner: process.env.OWNER,
    repo: process.env.REPO,
    event_type: process.env.EVENT_TYPE
  });

  console.log(result);
}

run().catch(err => {
  console.log(err);
});
