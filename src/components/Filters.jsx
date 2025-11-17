
import { setFilters } from '../features/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filters = () => {
    let dispatch = useDispatch();
    let { filters } = useSelector((state) => state.task);
  return (
    <div className='flex justify-center items-center gap-2'>
        <button onClick={() => dispatch(setFilters('all'))} className={` px-10 py-2  text-3xl border border-black rounded-md cursor-pointer ${filters == 'all' ? 'bg-blue-500 text-white' : ''}`}>All</button>
        <button onClick={() => dispatch(setFilters('completed'))} className={` px-10 py-2  text-3xl border border-black cursor-pointer rounded-md  ${filters == 'completed' ? 'bg-blue-500 text-white' : ''}`}>Completed</button>
    </div>
  )
}

export default Filters