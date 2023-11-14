// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import usePagination, { DOTS } from "@/utils/usePagination";

import React from "react";
import { nanoid } from "nanoid";

type TPagination = {
    onPageChange: (value: any) => void;
    onPageSizeOptionChange?: (value: number) => void;
    totalCount: number;
    currentPage: number;
    pageSize: number;
    pageSizeOptions?: number[];
    onNext: () => void;
    onPrev: () => void;
};

export function Pagination({
    onPageChange,
    onPageSizeOptionChange,
    totalCount,
    currentPage,
    pageSize,
    pageSizeOptions,
    onNext,
    onPrev,
}: TPagination) {
    const pageCount = Math.ceil(totalCount / pageSize);
    const paginationRange = usePagination({
        currentPage,
        pageCount,
    });

    return (
        <ul
            className="relative z-20 pagination-wrapper"
            // Do not remove the aria-label below, it is used for Hatchways automation.
            aria-label="dryv pagination list"
        >
            <li className="paginationItem">
                <button
                    type="button"
                    className="cursor-pointer arrowButton left"
                    // Do not remove the aria-label below, it is used for Hatchways automation.
                    aria-label="Goto previous page"
                    onClick={onPrev}
                    disabled={currentPage === 1} // change this line to disable a button.
                >
                    {/* <BsChevronLeft /> */}
                    <ArrowLeftIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" />
                </button>
            </li>

            {paginationRange.map((pageNumber) => {
                const key = nanoid();

                if (pageNumber === DOTS) {
                    return (
                        <li key={key} className="dots">
                            &#8230;
                        </li>
                    );
                }

                return (
                    <li
                        key={key}
                        className="paginationItem"
                        aria-current={`${pageNumber === currentPage ? "page" : "false"}`} // change this line to highlight a current page.
                    >
                        <button
                            type="button"
                            // Do not remove the aria-label below, it is used for Hatchways automation.
                            aria-label={`Goto page ${pageNumber}`}
                            onClick={() => onPageChange(pageNumber)}
                            disabled={pageNumber === currentPage}
                        >
                            {pageNumber}
                        </button>
                    </li>
                );
            })}

            <li className="paginationItem">
                <button
                    type="button"
                    className="cursor-pointer arrowButton right"
                    // Do not remove the aria-label below, it is used for Hatchways automation.
                    aria-label="Goto next page"
                    onClick={onNext}
                    disabled={pageCount === currentPage} // change this line to disable a button.
                >
                    {/* <BsChevronRight /> */}
                    <ArrowRightIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" />
                </button>
            </li>

            {/* {
        pageSizeOptions && onPageSizeOptionChange?  <select
        className="paginationSelector"
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(Number(e.target.value));
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select> : ''
     } */}
        </ul>
    );
}

Pagination.defaultProps = {
    totalCount: 0,
    currentPage: 1,
    pageSize: 15,
    //   pageSizeOptions: [15, 25, 50, 100],
    onPageChange: () => { },
    //   onPageSizeOptionChange: () => {},
};
