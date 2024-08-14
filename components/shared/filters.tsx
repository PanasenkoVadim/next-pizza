'use client'
import React from 'react'
import { RangeSlider, Title } from '.'
import { Input } from '../ui'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { useFilterIngredients } from '@/hooks/use-filter-ingredients'
import { useSet } from 'react-use'
import qs from 'qs'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	className?: string
}

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}
interface QueryFilters extends PriceProps {
	ingredients: string
	sizes: string
	pizzaTypes: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const { ingredients, loading, selectedIngredients, onAddId } =
		useFilterIngredients(searchParams.get('ingredients')?.split(','))
	const [sizes, { toggle: toggleSizes }] = useSet(
		new Set<string>(
			searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') : []
		)
	)
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
		new Set<string>(
			searchParams.get('pizzaTypes')
				? searchParams.get('pizzaTypes')?.split(',')
				: []
		)
	)
	const [{ priceFrom, priceTo }, setPrice] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})
	let filters = {}

	const items = ingredients?.map(item => ({
		text: item.name,
		value: String(item.id),
	}))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice(prev => {
			return {
				...prev,
				[name]: value,
			}
		})
	}

	React.useEffect(() => {
		filters = {
			priceFrom,
			priceTo,
			ingredients: Array.from(selectedIngredients),
			sizes: Array.from(sizes),
			pizzaTypes: Array.from(pizzaTypes),
		}
		const query = qs.stringify(filters, {
			arrayFormat: 'comma',
		})

		router.push(`?${query}`, { scroll: false })
	}, [selectedIngredients, sizes, pizzaTypes, priceFrom, priceTo])

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
			<CheckboxFiltersGroup
				name='types'
				title='Тесто'
				className='mt-5'
				selected={pizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
				onClickCheckbox={togglePizzaTypes}
			/>
			<CheckboxFiltersGroup
				name='sizes'
				title='Размеры'
				className='mt-5'
				selected={sizes}
				items={[
					{ text: '20см', value: '20' },
					{ text: '30см', value: '30' },
					{ text: '40см', value: '40' },
				]}
				onClickCheckbox={toggleSizes}
			/>
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(priceFrom)}
						onChange={e => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type='number'
						placeholder='1000'
						min={100}
						max={1000}
						value={String(priceTo)}
						onChange={e => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>
				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[priceFrom || 0, priceTo || 1000]}
					onValueChange={([priceFrom, priceTo]) =>
						setPrice({ priceFrom, priceTo })
					}
				/>
			</div>
			<CheckboxFiltersGroup
				title='Ингридиенты'
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selected={selectedIngredients}
				name='ingredients'
			/>
		</div>
	)
}
