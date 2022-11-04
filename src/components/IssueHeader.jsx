import { GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { possibleStatus } from '../helpers/defaultData';
import { relativeDate } from '../helpers/relativeDate';
import { useUserData } from '../helpers/useUserData';

export function IssueHeader({
  title,
  number,
  status = 'todo',
  createdBy,
  createdDate,
  comments,
}) {
  const statusObject = possibleStatus.find(
    (p_status) => p_status.id === status
  );
  const createdByUser = useUserData(createdBy);

  return (
    <header>
      <h2>
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span
          className={['done', 'cancelled'].includes(status) ? 'closed' : 'open'}
        >
          {['done', 'cancelled'].includes(status) ? (
            <GoIssueClosed />
          ) : (
            <GoIssueOpened />
          )}
          {statusObject.label}
        </span>
        <span className='created-by'>
          {createdByUser.isLoading ? '...' : createdByUser.data?.name}
        </span>{' '}
        opened this issue {relativeDate(createdDate)} • {comments.length}{' '}
        comments
      </div>
    </header>
  );
}
