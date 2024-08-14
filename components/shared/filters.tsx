'use client'

import { useIngredients } from '@/hooks/use-ingredients'
import { useFilters } from '@/hooks/use-filters'
import { useQueryFilters } from '@/hooks/use-query-filters'
import React from 'react'
import { RangeSlider, Title } from '.'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'

interface Props {
	className?: string
}

enum PriceChangeOptions {
	PRICE_FROM = 'priceFrom',
	PRICE_TO = 'priceTo',
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading } = useIngredients()
	const filters = useFilters()

	useQueryFilters(filters)

	const items = ingredients?.map(item => ({
		text: item.name,
		value: String(item.id),
	}))

	const onPriceChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		option: PriceChangeOptions
	) => {
		if (e.target.valueAsNumber > 1000) {
			e.target.value = '1000'
		}
		filters.setPrices(option, e.target.valueAsNumber)
	}

	const updatePrices = ([priceFrom, priceTo]: number[]) => {
		filters.setPrices(PriceChangeOptions.PRICE_FROM, priceFrom)
		filters.setPrices(PriceChangeOptions.PRICE_TO, priceTo)
	}

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
			<CheckboxFiltersGroup
				name='types'
				title='Тесто'
				className='mt-5'
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
				onClickCheckbox={filters.setPizzaTypes}
			/>
			<CheckboxFiltersGroup
				name='sizes'
				title='Размеры'
				className='mt-5'
				selected={filters.sizes}
				items={[
					{ text: '20см', value: '20' },
					{ text: '30см', value: '30' },
					{ text: '40см', value: '40' },
				]}
				onClickCheckbox={filters.setSizes}
			/>
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceFrom)}
						onChange={e => onPriceChange(e, PriceChangeOptions.PRICE_FROM)}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(filters.prices.priceTo)}
						onChange={e => onPriceChange(e, PriceChangeOptions.PRICE_TO)}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[
						filters.prices.priceFrom || 0,
						filters.prices.priceTo || 1000,
					]}
					onValueChange={updatePrices}
				/>
			</div>
			<CheckboxFiltersGroup
				title='Ингридиенты'
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
				name='ingredients'
			/>
		</div>
	)
}
