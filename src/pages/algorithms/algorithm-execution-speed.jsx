import React, { useEffect, useState } from "react";
import Head from "next/head";
// import {
// 	VKShareButton,
// 	VKIcon,
// 	EmailShareButton,
// 	EmailIcon,
// 	WhatsappShareButton,
// 	WhatsappIcon,
// 	TelegramShareButton,
// 	TelegramIcon,
// } from "next-share";
// import dynamic from 'next/dynamic';
import { getDateString } from "../../services/support";
import sanityClient from "../../../public/support-func/sanityClient";
import Script from "next/script";
import { useDispatch } from "react-redux";
import { setCategoriesState } from "../../store/slices/categoriesSlice";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { sortByDate } from "../../../public/support-func/support.js";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../../components/breadcrumbs"));
const Cards = dynamic(() => import("../../components/cards"));
import MainLayout from "../../layouts/main-layout";
import CodeInput from "../../components/code-input";
import LineChart from "../../components/line-chart";
// сделать отдельно хук суппорт где будет обрезаться location

export async function getStaticProps({ params }) {
	const allPosts = await sanityClient.fetch(
		`*[_type == "posts && active == true"]`
	);
	const categories = await sanityClient.fetch(
		`*[_type == "categories" && activeCategory == true]`
	);
	return {
		props: {
			categories,
			allPosts: allPosts,
		},

		revalidate: 60,
	};
}

const example1 = `nameCollection.foreach((name) => 
    {alert(${"`Hello, ${name}!`"});
})
`;

const example2 = `function CountInventory(stuffToSell, colorList) {
    totalItems = 0;
    stuffToSell.foreach((thing) => {
        colorList.foreach((color) => {
            totalItems += thing[color];
        });
    });
}`;

const example3 = `function binarySearch(numarray, left, right, x) {
    if (left < right)  {
        const mid = 1 + (right - 1) / 2;
        if (numarray[mid] == x) return mid;
        if (numarray[mid] > x) {
            return binarySearch(numarray, left, mid - 1, x);
        }
        return binarySearch(numarray, mid + 1, right, x);
    } else {
        return -1;
    }
}`;

const useFormattedDate = (date) => {
	const [formattedDate, setFormattedDate] = useState(null);

	useEffect(() => setFormattedDate(getDateString(date)), []);

	return formattedDate;
};

const Post = ({ categories, allPosts }) => {
	const dispatch = useDispatch();
	const [menu, setMenu] = useState([]);
	const [expanded, setExpanded] = useState(false);
	const [innerWidth, setInnerWidth] = useState(0);
	const [changeMenuPosition, setChangeMenuPosition] = useState(false);
	const [lastPosts, setLastPosts] = useState([]);
	useEffect(() => {
		setmMenu();
		setPosts();
		if (typeof window !== "undefined") {
			window.scrollTo(0, 0);

			window.addEventListener("resize", handleResize);
			handleResize();
			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	const setmMenu = () => {
		try {
			const headings = document.querySelectorAll(".heading");
			let links = [];

			const createMenuItems = (elements) => {
				elements.forEach((el, i) => {
					const tag = el?.nodeName;
					const text = el?.innerText;
					const linkName = tag + i;
					el.setAttribute("id", `${linkName}`);

					const link = {
						linkName: linkName,
						text: text,
						classList: "",
					};

					switch (tag) {
						case "H1":
							link.classList = "first_level";
							break;
						case "H2":
							link.classList = "second_level";
							break;
						case "H3":
							link.classList = "three_level";
							break;
						case "H4":
							link.classList = "four_level";
							break;
						case "H5":
							link.classList = "five_level";
							break;
						case "H6":
							link.classList = "six_level";
							break;
						default:
							break;
					}

					links.push(link);
				});
			};

			if (headings.length > 0) {
				createMenuItems(headings);
				setMenu(links);
			}
		} catch (e) {
			// console.log(e);
		}
	};

	useEffect(() => {
		if (categories) {
			dispatch(setCategoriesState(categories));
		}
	}, [categories]);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (scrollY > 200) {
				setChangeMenuPosition(true);
			} else {
				setChangeMenuPosition(false);
			}
		});
	});

	const setPosts = () => {
		if (allPosts?.length) {
			const newArr = allPosts.filter(
				(n) => n.slug.current !== `algorithm-execution-speed`
			);
			setLastPosts(newArr && sortByDate(newArr));
		}
	};

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const handleResize = () => {
		setInnerWidth(window?.innerWidth);
	};

	return (
		<>
		<Head>
				<title>Скорость выполнения алгоритма</title>
				<meta name="keywords" content="сложность алгоритмов js, временная сложность алгоритма, сложность алгоритмов, сложность алгоритма n, оценка сложности алгоритмов, асимптотическая сложность алгоритма, сложность алгоритма o, полиномиальная сложность, экспоненциальное время, frontend, js, javascript, фронтенд" />

				<meta
					name="description"
					content="Это краткий конспект части о скорости выполнения алгоритма в книге Гид по Computer Science, Вильям Спрингер. Обозначается как O(n) (произносится как «О большое от n» или просто «О от n»).
					Если какое то свойство изменяет время алгоритма на постоянную величину..."
					key="ogdesc"
				/>
			</Head>
		<MainLayout
			categories={categories}
		>
			<div className="container container--center main_container">
				<Breadcrumbs
					pathArr={[
						{ name: "Посты", url: "/posts" },
						{ name: "Скорость выполнения алгоритма" },
					]}
				/>
				<div className="mt-16  flex page_container">
					<div className="post main  main--not_main">
						<h1>Скорость выполнения алгоритма</h1>
						{menu.length > 0 && innerWidth < 1200 && (
							<Accordion
								className="menu_accordeon"
								expanded={expanded === "panel2"}
								onChange={handleChange("panel2")}
							>
								<AccordionSummary
									aria-controls="panel2bh-content"
									id="panel2bh-header"
									expandIcon={<ExpandMoreIcon />}
								>
									<h2>Содержание</h2>
								</AccordionSummary>
								<AccordionDetails>
									<div className="menu">
										{menu?.map((item, i) => (
											<a
												key={i}
												className={`menu__item ${item.classList}`}
												href={`#${item.linkName}`}
											>
												{item.text}
											</a>
										))}
									</div>
								</AccordionDetails>
							</Accordion>
						)}
						<p className="post_date">
							{useFormattedDate(`2023-10-30`)}
						</p>
						<i className="text-xs">
							Это краткий конспект части о скорости выполнения
							алгоритма в книге Гид по Computer Science, Вильям
							Спрингер
						</i>
						<p className="text">
							<strong>
								Обозначается как{" "}
								<span className="accent_text">O(n)</span>
							</strong>{" "}
							(произносится как «О большое от n» или просто «О от
							n»).{" "}
						</p>
						<p className="text">
							Если какое то свойство изменяет время алгоритма на{" "}
							<strong>постоянную величину</strong>, мы{" "}
							<strong>можем</strong> его{" "}
							<strong>игнорировать</strong> - так как его влияние
							не заметно, по сравнению с влиянием размера задачи.
						</p>
						<p className="text">
							В большинстве ситуаций рассчитывается{" "}
							<strong>наихудшее время выполнения</strong>, которое
							часто совпадает со средним временем.{" "}
						</p>
						<p className="text">
							Например, когда одна итерация занимает всегда 2
							секунд, а всего нам необходимо n итераций, общее
							время 2*n (2n). Отбрасываем константу 2 и для
							расчета времени времени используем только n. То есть
							в худшем случае, время выполнения алгоритма равно
							количеству элементов во входных данных. В этом
							случае интересует не количество шагов, а скорость.{" "}
						</p>
						<p className="text">
							Есть два списка целых чисел{" "}
							<span className="accent_text">{`{1, 2, 3, 4, 5, 6, 7, 8}`}</span>{" "}
							и{" "}
							<span className="accent_text">{`{3, 5, 4, 1, 2}`}</span>
							. Время их сортировки может отличаться для разных
							алгоритмов. Для одного важна отсортированность
							списка, для другого размер, но оба фактора влияют на
							количество шагов, нужных для сортировки.
						</p>
						<p className="text">
							Если два цикла рядом их время складывается, если
							циклы вложенные - умножаются.
						</p>

						<h2 className="heading">Асимптотическое время</h2>
						<p className="text">
							<strong>
								Асимптотическое время выполнения алгоритма
							</strong>{" "}
							- скорость увеличения времени выполнения в
							зависимости от размера входных данных.
						</p>
						<p className="text">
							Время выполнения линейного алгоритма. Для
							большинства задач это лучшее чего можно добиться.
						</p>
						<p className="text">
							<strong>В JavaScript</strong> за асимптотическое
							время работает цикл forEach
						</p>
						<p className="text">
							<strong>
								Часто количество элементов влияет на объем
								работы для отдельного элемента.
							</strong>
							В алгоритме сортировки обрабатывается каждый элемент
							списка, разделяя список на два меньших, пока каждый
							элемент не окажется в своем собственном списке.
						</p>
						<ul className="list-none">
							<li>На каждой итерации время O(n),</li>
							<li>Требует O(lg n) итераций,</li>
							<li>В общем - O(n) * O(lg n) = O(n lg n)</li>
							<li className="text-xs">
								(*lg — это логарифм по основанию 10, но в
								Computer Science принимают, что это логарифм по
								основанию 2.)
							</li>
						</ul>
						<h2 className="heading">Полиномиальное время</h2>
						<p className="text">
							<strong>Полиномиальное время</strong>- время
							выполнения пропорционально количеству входных
							данных, возведенному в некоторую степень. Их принято
							называть быстрыми (Хоть и зависит от случая).{" "}
						</p>
						<p className="text">
							<strong>Например,</strong> алгоритм, в котором
							каждый элемент сравнивается со всеми остальными,
							работает за <strong>квадратичное время</strong> - O(
							n^2).
						</p>
						<h2 className="heading">Экспоненциальное время</h2>
						<p className="text">
							<strong>Экспоненциальное время</strong> - время
							выполнения, это константа, возведенная в степень,
							равную размеру входных данных.
						</p>
						<p className="text">
							<strong>Пример:</strong> Нужно угадать числовой код
							длиной 20 символов из 10 цифр от 0 до 9 - количество
							возможных вариантов 10^20. В этом случае
							полиномиальные алгоритмы окажутся гораздо быстрее -
							20^10.
						</p>
						<p className="text">
							Часто найти приближенное решение задачи можно за
							полиномиальное время, однако получить точный (или
							близкий к точному) ответ можем лишь за
							экспоненциальное время.
						</p>
						<p className="text">
							<strong>Например, задача коммивояжёра:</strong>{" "}
							Продавец хочет посетить каждый город на своем
							маршруте ровно один раз и вернуться домой, преодолев
							минимальное расстояние.
						</p>
						<p className="text">
							<strong>Получить точный ответ</strong> - вычислить
							все возможные маршруты и сравнить их суммарные
							расстояния (O(n!) возможных путей).
						</p>
						<p className="text">
							Очень{" "}
							<strong>
								близкое к оптимальному (в пределах до 1 %)
							</strong>{" "}
							решение может быть найдено за экспоненциальное
							время.{" "}
						</p>
						<p className="text">
							Но <strong>возможное «достаточно хорошее»</strong>{" "}
							(в пределах <strong> 50 %</strong>от оптимального)
							решение может быть найдено за полиномиальное время.
						</p>

						<LineChart />
						<h2 className="heading">Примеры</h2>
						<p className="text">1)</p>
						<CodeInput code={example1} />

						<p className="text">
							В этом примере у нас есть коллекция из n строк. Для
							каждой строки мы выводим сообщение.{" "}
						</p>
						<p className="text">
							Время вывода сообщения не зависит от количества
							строк, поэтому занимает постоянное время O(1).
						</p>
						<p className="text">
							Вывести сообщение нам нужно n раз - O(n).
						</p>
						<p className="text">
							<strong>Общее время выполнения</strong> O(1)*O(n) =
							O(n)
						</p>
						<p className="text">2)</p>
						<CodeInput code={example2} />
						<p className="text">
							Здесь время выполнения O(nm). Не O(n^2) - нет
							оснований полагать, что между n и m существует
							взаимосвязь.
						</p>
						<p className="text">3)</p>
						<CodeInput code={example3} />
						<p className="text">
							Время выполнения O(lg n) - выполняем O(lg n)
							вызовов, каждый из которых занимает O(1) времени.
						</p>
						<p className="text">
							Более подробно о сложности выполнения алгоритма
							можно прочитать, например,{" "}
							<a
								className="link"
								href="https://proglib.io/p/asymptotic-complexity"
								target="_blank"
								rel="noreferrer noopener"
							>
								здесь
							</a>
						</p>

						<h2 className="heading">В заключение</h2>
						<p className="text">
							Расчет скорости выполнения задачи нужен только для
							определенных задач. Применяйте оптимизацию в
							зависимости от цели. Важно оптимизировать только то,
							что необходимо.{" "}
						</p>
						<p className="text">
							<strong>Не нужно оптимизировать</strong>
						</p>
						<ul>
							<li>
								1) Если важна удобочитаемая программа, но
								интерфейс работает незначительно медленнее, чем
								мог бы, это никого не волнует.
							</li>
							<li>
								2) Алгоритм используется для различных программ,
								которые могу выполнять его различно по времени и
								мы не можем это контролировать. В этом случае
								важнее минимизировать количество шагов.{" "}
							</li>
						</ul>
						<p className="text">
							<strong>Нужно оптимизировать</strong>
						</p>
						<ul>
							<li>
								Код внутри цикла, который должен выполняться
								миллионы раз, должен быть написан максимально
								эффективно.
							</li>
						</ul>
						<p className="text">
							Можно выбрать алгоритм, который в среднем работает
							немного медленнее, но зато гарантирует, что его
							выполнение никогда не займет больше времени, чем мы
							считаем приемлемым.
						</p>
						<p className="text">
							Также иногда мы можем смириться со случайными
							всплесками времени выполнения.
						</p>

						<div className="other_posts">
							<h2>Другие посты</h2>
							<Cards data={lastPosts.slice(0, 3)} />
						</div>

						<div id="adfox_169091256339947002"></div>
						<Script
							id="yandex-ads-adfox-1"
							strategy="afterInteractive"
						>
							{`
									window.yaContextCb.push(()=>{
										Ya.adfoxCode.create({
											ownerId: 1464385,
											containerId: 'adfox_169091256339947002',
											params: {
												pp: 'g',
												ps: 'grkh',
												p2: 'hukd'
											}
										})
									})
								`}
						</Script>
					</div>

					<div className="aside">
						{menu.length > 0 && innerWidth > 1200 && (
							<div
								className={`menu ${
									changeMenuPosition && "menu--top"
								}`}
							>
								<h2>Содержание</h2>
								{menu?.map((item, i) => (
									<a
										key={i}
										className={`menu__item ${item.classList}`}
										href={`#${item.linkName}`}
									>
										{item.text}
									</a>
								))}
							</div>
						)}

						{innerWidth > 1000 && (
							<div className="banner">
								<div id="yandex_rtb_R-A-2501461-3"></div>
								<Script
									id="yandex-ads-3"
									strategy="afterInteractive"
								>
									{`
									window.yaContextCb.push(()=>{
										Ya.Context.AdvManager.render({
											"blockId": "R-A-2501461-3",
											"renderTo": "yandex_rtb_R-A-2501461-3"
										})
									})
								`}
								</Script>
							</div>
						)}
					</div>
				</div>
			</div>
		</MainLayout></>
	);
};

export default Post;
