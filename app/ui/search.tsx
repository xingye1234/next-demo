'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { debounce } from '../utils/debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { debounce } from '../utils/debounce';
// import {useDebouncedCallback} from 'use-debounce'

export default function Search({ placeholder }: { placeholder: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = new URLSearchParams(searchParams);

  const handleSearch = debounce((e) => {
    const val = e.target.value;
    if (val) {
      query.set('query', val);
    }else{
      query.delete('query');
    }

    query.set('page', "1")

    router.replace(`${pathname}?${query.toString()}`);
  }, 500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={handleSearch}
        defaultValue={query.get('query')!}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
