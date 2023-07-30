export default function SkeletonLoading() {
  return (
    <div className='flex items-center flex-col md:flex-row gap-4 animate-pulse'>
      <div className='h-8 flex-1 bg-input-lg dark:bg-el-db' />
      <div className='h-8 flex-1 bg-input-lg dark:bg-el-db' />
      <div className='h-8 flex-1 bg-input-lg dark:bg-el-db' />
      <div className='h-8 flex-1 bg-input-lg dark:bg-el-db' />
    </div>
  );
}
