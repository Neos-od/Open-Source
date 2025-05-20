import data from "./data";

function TableList(){
	return(
		<div className="table_list mx-auto max-w-[1000px] px-[25px] custom:px-0">
			<form>
				<div className="flex justify-end gap-4 py-5">
					<input type="text" placeholder="제목 + 내용" className="w-[195px]" />
					<input type="image" src="/images/btn_search.gif" alt="btn search" />
				</div>
			</form>
			<div className="w-full">
				<table>
					<thead>
						<tr>
							<th scope="row" className="h-[46px] font-normal text-[#555] bg-[#eee] border-r border-white">번호</th>
							<th scope="row" className="h-[46px] font-normal text-[#555] bg-[#eee] border-r border-white">구분</th>
							<th scope="row" className="title h-[46px] font-normal text-[#555] bg-[#eee] border-r border-white">제목</th>
							<th scope="row" className="date h-[46px] font-normal text-[#555] bg-[#eee]">등록일</th>
						</tr>
					</thead>
					<tbody>
						{
							data.map((d, i) =>
								<TdList key={i+1} category="notice" propsValue={d} />
							)
						}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function TdList(props){
	let {category, propsValue}=props;
	let {num, text, date}=propsValue;

	return(
		<tr>
			<td className="w-[95px]">{num}</td>
			{
				category === "notice" ?
					<td className="w-[95px] h-[70px] text-center text-[#555] border-b border-[#eee]"><img src="/images/news_notice_icon.gif" alt="icon" /></td> :
					<td className="w-[95px] h-[70px] text-center text-[#555] border-b border-[#eee]"></td>
			}
			<td className="relative h-[70px] text-left text-[#555] border-b border-[#eee]">
				<a href="" className="absolute left-0 top-[22px] px-[30px] w-[80%] overflow-hidden whitespace-nowrap overflow-ellipsis">{text}</a>
			</td>
			<td className="w-[140px] h-[70px] text-center text-[#555] border-b border-[#eee]">{date}</td>
		</tr>
	);
}

export default TableList;