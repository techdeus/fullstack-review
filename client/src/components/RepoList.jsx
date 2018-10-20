import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <h3> There are {props.repos.length} repos. </h3>
    <table>
    	<tbody>
    		<tr>
    			<th>repo_name</th>
    			<th>html_url</th>
    			<th>forks</th>
    		</tr>
    		{props.repos.map(repo => <RepoListEntry repo={repo}/>)}
    	</tbody>
    </table>
  </div>
)

export default RepoList;