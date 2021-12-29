export let PAGE_START = 1

export interface Page<E> extends Slice<E> {
    totalElements: number
    totalPages: number
}

export interface Slice<E> {
    content: Array<E>
    first: boolean
    last: boolean
    empty: boolean
    number: number
    numberOfElements: number
    size: number
}

export interface Slicination {
    page: number
    size: number
    last: boolean
    first: boolean
}

export interface Pagination extends Slicination {
    total: number
}

export type Pageable = {
    page: number
    size: number
}

export function defaultPagination(
    options: {page?: number; size?: number} = {},
): Pagination {
    return {
        ...defaultSlicination(options),
        total: 0,
    }
}

export function defaultSlicination(
    options: {
        page?: number
        size?: number
    } = {},
): Slicination {
    return {
        page: options.page || PAGE_START,
        size: options.size || 10,
        first: true,
        last: false,
    }
}

export function paginationToPageable(pagination: Pagination): Pageable {
    return {
        page: pagination.page,
        size: pagination.size,
    }
}
