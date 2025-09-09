import { AlmostWork } from '@/types'
import Image from 'next/image'

export function AlmostWorkCard({ almostWork }: { almostWork: AlmostWork }) {
	return (
		<>
			{almostWork.isFullSize ? (
				<div className="col-span-full flex flex-col gap-4">
					<div className="w-full h-[510px] rounded-[80px] overflow-hidden">
						<Image
							src={almostWork.image}
							alt={almostWork.title}
							width={1200}
							height={600}
							className="w-full h-full object-cover filter brightness-70"
						/>
					</div>
					<h3 className="text-center text-2xl font-medium">
						{almostWork.title}
					</h3>
				</div>
			) : (
				<div className="flex flex-col gap-4">
					<div className="w-full aspect-square rounded-[80px] overflow-hidden">
						<Image
							src={almostWork.image}
							alt={almostWork.title}
							width={600}
							height={600}
							className="w-full h-full object-cover"
						/>
					</div>
					<h3 className="text-center text-xl font-medium">
						{almostWork.title}
					</h3>
				</div>
			)}
		</>
	)
}
