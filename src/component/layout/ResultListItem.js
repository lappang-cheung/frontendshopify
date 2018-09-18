import React from 'react';

const ResultListItem = ({result, context, version, index, favorite}) => (
  <tr key={index}>
  <td><a href={result.html_url} className="linkUrl">{result.full_name}</a></td>
  <td>{result.language}</td>
  <td>{version} </td>
  <td>
          <a href="# "
              className="bookmark"
              onClick={() => context.onAdd(result)}
          >
              {favorite}
          </a>
      </td>
  </tr>
);

export default ResultListItem;