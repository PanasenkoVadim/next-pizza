import React from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'
import { Input, Skeleton } from '../ui'

type Item = FilterChecboxProps

type Props = {
	title: string
	items: Item[]
	defaultItems?: Item[]
	limit?: number
	loading?: boolean
	searchInputPlaceholder?: string
	onClickCheckbox?: (id: string) => void
	selected?: Set<string>
	defaultValue?: string[]
	name: string
	className?: string
}

export const CheckboxFiltersGroup: React.FC<Props> = props => {
	const {
		title,
		items,
		defaultItems = items,
		limit = 5,
		searchInputPlaceholder = 'Поиск...',
		className,
		loading,
		onClickCheckbox,
		selected,
		name,
		defaultValue,
	} = props
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')

	const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	const onShowAllChange = () => {
		setShowAll(!showAll)
		setSearchValue('')
	}

	const itemsList = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: defaultItems.slice(0, limit)

	if (loading) {
		return (
			<div className={className}>
				<p className='font-bold mb-3'>{title}</p>
				{...Array(limit)
					.fill(0)
					.map((item, index) => (
						<Skeleton key={index} className='h-6 mb-4 rounded-[8px]' />
					))}
				<Skeleton className='w-28 h-6 mb-4 rounded-[8px]' />
			</div>
		)
	}

	return (
		<div className={className}>
			<p className='font-bold mb-3'>{title}</p>
			{showAll && (
				<div className='mb-5'>
					<Input
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
						onChange={onSearchInputChange}
						value={searchValue}
					/>
				</div>
			)}
			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{itemsList.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						name={name}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
					/>
				))}
			</div>
			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neural-100 mt-4' : ''}>
					<button onClick={onShowAllChange} className='text-primary mt-3'>
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}
		</div>
	)
}