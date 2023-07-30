"use client";

export default function SearchForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("hello");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='max-w-[500px] bg-white dark:bg-el-db flex gap-4 items-center pl-6 pr-3 py-1 drop-shadow-md'>
        <label htmlFor='searchCountry'>
          👌
          <span className='sr-only'>Search</span>
        </label>
        <input
          type='search'
          name='q'
          id='searchCountry'
          placeholder='Search for a country...'
          className='py-2 outline-none'
        />
      </div>
    </form>
  );
}
