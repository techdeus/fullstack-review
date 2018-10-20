import React from 'react';

const RepoListEntry = (props) => (
  <tr>
    <td>{props.repo.name}</td>
    <td><a href={props.repo.html_url}>{props.repo.html_url}</a></td>
    <td>{props.repo.forks_count}</td>
  </tr>
)

export default RepoListEntry;