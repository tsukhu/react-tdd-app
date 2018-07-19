import React from 'react';
import { render } from 'react-testing-library';
import CommentFeed from './CommentFeed';

describe('CommentFeed', () => {
  let props = { header: 'Comment Feed', comments: [] };

  it('renders the CommentFeed', () => {
    const { queryByText } = render(<CommentFeed {...props} />);
    const header = queryByText(props.header);
    expect(header.innerHTML).toBe(props.header);
  });

  it('renders the comment list', () => {
    const { container } = render(<CommentFeed {...props} />);
    const commentNodes = container.querySelectorAll('.Comment');
    expect(commentNodes.length).toBe(props.comments.length);
  });

  it('renders the comment list with some entries', () => {
    const comments = [
      {
        author: 'Ian Wilson',
        text: 'A boats a boat but a mystery box could be anything.'
      },
      {
        author: 'Max Powers Jr',
        text: 'Krypton sucks.'
      }
    ];
    props = { header: 'Comment Feed', comments };
    const { container } = render(<CommentFeed {...props} />);
    const commentNodes = container.querySelectorAll('.Comment');
    expect(commentNodes.length).toBe(props.comments.length);
  });
});
