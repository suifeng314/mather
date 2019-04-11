/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Integer Type']=Kx(

detail('整数（按自身数学性质）',Table([ZLR('名称 定义 前$n$项 性质')],[

	['伪素数____假素数____improper Prime','合数$n，满足条件：____n|2^n-2（显然n>2）$',
		'$341=11⋅31$____（已知的最小假素数）,$161038=2⋅73⋅1103$____（第1个偶假素数）'.split(',').join(br),
		ul(['有无穷多个（奇偶都有无穷多个）',
			'$n是奇假素数 ⇒ 2^n-1$也是奇假素数','求出1个偶假素数很困难',
			'$当1 < n < 300时，满足n|2^n-2$的数都是素数','当$n≥300$时，不一定是素数'])],

	['伪素数____Pseudoprime',['不是素数，但与素数有某种相同性质'].join(br),
		''.split(',').join(br),
		ul([''
		])],



	['Carmichael数____伪费马素数',['合数$n，满足'+mod('a^{n-1}',1,'n','','','')+'$____其中$a是任意比n小且与n$互素数',
			'合数$n$，无平方因子，____且$n的所有素因子p满足p-1|n-1$____'+scbox('Korselt criterion准则','brad bold'),
			'费马小定理逆定理不成立的反例'].join(hr),
		'561=3⋅11⋅17,1105=5⋅13⋅17,1729=7⋅13⋅19,2465=5⋅17⋅29,2821=7⋅13⋅31,6601=7⋅23⋅41,8911=7⋅19⋅67,41041=7⋅11⋅13⋅41,62745=3⋅5⋅47⋅89,小于1亿只有255个'.split(',').join(br),
		ul(['有无限多','是奇数（只含奇素因子）','无素平方因子','素因子至少有3个','$p-1|n-1$',
			'当下面这3数都是素数时，____$(6k+1)(12k+1)(18k+1)$是Carmichael数____'+scbox('Chernick','brad bold')+
			'____但此公式能否产生无限多Carmichael数未知',
		ol([''])
		])],

	['Giuga数____',['合数$n，满足其任意素因子都不是重因子（n无素平方因子）$，____且$'+mod(frac('n','p',''),1,'p','','','')+'$____$p|'+frac('n','p','')+'-1$'+hr+
		'$p^2|n-p$____'+ksc(mod('n','p','p^2','','','')),
		ksc(mod('nB_{φ(n)}',-1,'n','','',''))+'其中$φ$是欧拉函数，$B$是Bernoulli数',
		ksc(mod(sum('i',1,'n-1','i^{φ(n)}','',''),-1,'n','','','')),
		'$存在某个正整数a，使得n是差分方程n\' = a n + 1$',
		ksc(sum('','p|n','',frac(1,'p',''),'','')+' - '+prod('','p|n','',frac(1,'p',''),'',''))+'是自然数____（事实上，已知的Giuga数，此式子结果都是1）',
			].join(hr),
		'30, 858, 1722, 66198, 2214408306, '.split(',').join(br),
		ul(['一定不是semiprime数（pq素数）','无素平方因子','已知的都是偶数','如是奇数，则它至少含14个素因子',
		ol(['是否有无穷多个，未知'],'unknown')
		])],


	['完美数____完全数____完备数____完满数____Perfect',['真因子之和等于自身','⇔ 自身等于因子和的一半 $δ(n)=2n$'].join(br),
		'6,28,496,8128,33550336'.split(',').join(br),
			ul(['偶完美数：$'+frac('M(M+1)',2,'')+' = (2^p-1)2^{p-1}____其中p是素数，M=2^p-1是第n$个梅森素数',
				'偶完美数尾数是6或28','偶完美数（6除外）数根是1','偶完美数与梅森素数一一对应____'+scbox('Euclid–Euler定理','bold brad'),'偶完美数都是实用数',
				'奇完美数：是否存在未知____但形式只能是$p^{4a+1}Q^2$____其中$p是奇素数，a,Q$是整数'+scbox('Euler','bold brad'),
				'真因子倒数和是1____$⇔$ 因子倒数和是2'])],
		
	['多倍完美数____',['因子和等于自身的倍数$δ(n)=kn$'].join(br),
		'$δ(120)=360$,$δ(672)=3×672$'.split(',').join(br),
			ul([ol(['$k>10$的多倍完美数，尚未找到',
			'是否有无穷多个，未知'],'unknown')])],



	['丰数____富裕数____Abundant',['真因子之和大于自身','$⇔ $自身小于因子和的一半','$⇔ 因子和大于自身2倍 δ(n)>2n$'].join(br),''.split(',').join(br),
			ul(['真因子倒数和大于1____⇔ 因子倒数和大于2'])],
		
	['亏数____不足数____Deficient',['真因子之和小于自身','$⇔ 自身大于因子和的一半','⇔ 因子和小于自身2倍 δ(n) < 2n$'].join(br),''.split(',').join(br),
			ul(['真因子倒数和小于1____⇔ 因子倒数和小于2'])],

	['最小丰数____几乎完美数____almost Perfect',['一类丰数$δ(n)=2n+1$','真因子（1除外）之和等于自身'].join(br),
		'尚未找到',''],

	['最大亏数____',['一类亏数$δ(n)=2n-1$',''].join(br),
		'2,4,8,16,32',ul(['2的幂都是最大亏数','是否有其他的形式，还需查文献'])],

	['半完美数____半完满数____SemiPerfect',['部分因子和等于自身',''].join(br),
		'',ul(['几乎完美数（最小丰数）都是半完美数'])],
	['怪数____Freak',['是丰数，但不是半完美数',''].join(br),
		'70,836,4030',ul(['怪数有无限多个，____且Schnirelmann密度为正'+scbox('Erdos','bold brad'),'奇数怪数尚未找到'])],

	['过剩数____Remainder',['自然数$n$满足：____$∀自然数m, m < n$____$→ '+frac('δ(m)','m','')+' < '+frac('δ(n)','n','')+'$相对因数和'].join(br),
		'6',ul(['过剩数有无限多个'+scbox('Erdos','bold brad')])],

	['实用数____Practical',['自然数$n$满足：____$∀自然数m, m≤n$____$→ m是n$的不同真因子之和'].join(br),
		'6',ul(['$2^{n-1}(2^n-1)$都是实用数____因此实用数有无限多个','偶完美数都是实用数'])],



	['Fortunate数____因数学家名得名',['最小的大于1的整数m，满足素数阶乘p_n\\#+m是素数'].join(br),
		'3,5,7,13,23,17,19,23,37,61,67,61,71,47,107,59,61,109,⋯,'.split(',').join(br),
		ul(['',
			ol(['猜想Fortunate数都是素数'],'unknown')
		])],



	['Euler幸运数____Euler Lucky',['正数$n$满足：____多项式$k^2-k+n都是素数（1 ≤ k < n）$'].join(br),
		'只有6个：,2,3,5,11,17,41'.split(',').join(br),
		ul(['',
		])],

	
	['Scheherazade数','含有素数阶乘因子'+ksc('n\\#')+'____其中$n≥13$，且是该数最大的素因子____因此必含有因子$7×11×13 = 1001$____'+
		SCtv('notes','数学家Fuller借典故命名：____Scheherazade谢赫拉莎德____《1001夜》（即《天方夜谭》）中的苏丹新娘'),[''].join(br),ul([''])],
			

],'TBrc').replace(/____/g,br))+

detail('整数（按表达式）',Table([ZLR('名称 定义 前n项 性质')],[

	['Semiprime数____biprime数____2-almost prime____pq数',['pq','两素数的乘积数'].join(hr),
		'4,6,9,10,14,15,21,22,25,26,33,34,35,38,39,46,49,51,55,57,58,62,65,69,74,77,82,85,86,87,91,93,94,95,⋯,'.split(',').join(br),
		ul(['',
		])],
	['k-almost prime数____',['最多有k个素因子的数'].join(hr),
		''.split(',').join(br),
		ul(['1-almost prime ⇔ 素数',
			'2-almost prime ⇔ 素数和Semiprime数',
		])],

	['Powerful数____幂数',['若干素因子的2次（或2以上）幂的乘积','标准分解式中幂都大于1（至少是2）'].join(hr),
		'1,4,8,9,16,25,27,32,36,49,64,72,81,100,108,121,125,128,144,169,196,200,216,225,243,256,288,289,324,343,361,392,400,432,441,484,500,512,529,576,625,648,675,676,729,784,800,841,864,900,961,968,972,1000,⋯,'.split(',').join(br),
		ul(['每个整数都可以表示成两个幂数之差____'+scbox('McDaniel, 1982','bold brad'),
			'每个足够大的整数都可以表示成最多3个幂数之和____'+scbox('Erdős猜测，Roger Heath-Brown, 1987证明','bold brad')
		])],
	['Perfect Power数____完全幂数',['$m^k$','标准分解式中幂大于1（至少是2）都相等','例如：完全平方，完全立方'].join(hr),
		'(1),4,8,9,16,25,27,32,36,49,64,81,100,121,125,⋯,'.split(',').join(br),
		ul(['$'+sum('m',2,'+',sum('k',2,'+',frac(1,'m^k',''),'',''),'','')+' = 1$____'+
			SCtv('prov',ksc(Eq([['原式',
				sum('m',2,'+',frac(1,'m^2','')+sum('k',0,'+',frac(1,'m^k',''),'',''),'','')],
				sum('m',2,'+',frac(1,'m^2','')+frac('m','m-1',''),'',''),
				sum('m',2,'+',frac(1,'m(m-1)',''),'',''),
				sum('m',2,'+',frac(1,'m-1','')+'-'+frac(1,'m',''),'',''),
				1]))),
			'$'+sum('','q','',frac(1,'q',''),'','')+' = '+sum('k',2,'+','μ(k)(1-ζ(k))','','')+' ≈ 0.874464368⋯$____其中$q$遍历所有完全幂数（不含1），$μ$是Möbius函数，$ζ$是Riemann ζ函数',
			'$'+sum('','q','',frac(1,'q-1',''),'','')+' = '+kfrac(zlrA('1/',[3,7,8,15,24,26,31]).join('+'),1)+'+⋯ =1$____其中$q$遍历所有完全幂数（不含1）____'+scbox('Goldbach-Euler定理','bold brad'),
		
		])],
	['Achilles数',['非完全幂的幂数','标准分解式中幂都大于1且互素（不要求两两互素）',SCtv('notes','得名于特洛伊战争中强大但不完美的英雄Achilles之名')].join(hr),
		'72,108,200,288,392,432,500,648,675,800,864,968,972,1125,1152,1323,1352,1372,1568,1800,1944,2000,2312,2592,2700,2888,3087,3200,3267,3456,3528,3872,3888,4000,4232,4500,4563,4608,5000,⋯,'.split(',').join(br),
		ul(['最小的一对连续Achilles数是____'+ksc('5425069447 = 7^3 × 41^2 × 97^2____5425069448 = 2^3 × 26041^2'),
		])],
	['强Achilles数____Strong Achilles',['Achilles数，满足欧拉函数也是Achilles数',''].join(br),
		'⋯,'.split(',').join(br),
		ul(['',
		])],


	['梅森数____Mersenne',['$M_p=2^p-1 其中p是素数$','$M_{P_n}$'].join(hr),
		'3,7,31,127,2047,8191,131071,524287,2097151,8388607'.split(',').join(br),
		ul(['$M_p素因子q只能是2kp+1形式$____其中$p$是奇素数____即$2p|q-1$____也即$p|'+frac('q-1',2,'')+'$',
		'$M_p素因子q只能是8k±1形式$____其中$p$是奇素数____即8|q±1（二必居一）____也即$4|'+frac('q±1',2,'')+'$',
		'素数$p=4n+3$，则____$2p+1是素数 ⇔ 2p+1|M_p$',
		'不同的梅森数互素$(M_m,M_n) = 1$'
		])],


	['费马数____Fermat',['$F_n = '+msups([2,2,'n'],'')+'+1$',
			'递推关系：____$F_0=3$____'+ul([
			ksc(Eq([['F_n','(F_{n-1}-1)^2+1'],
				'F_{n-1}^2-2(F_{n-1}-1)',
				'F_{n-1}^2-2(F_{n-2}-1)^2',
				'F_0⋯F_{n-1}+2',
				'F_{n-1}+'+msups([2,2,'n-1'],'')+'F_0⋯F_{n-2}'])),
			'$F_n-1 = (F_{n-1}-1)^2$',
				
			ksc(Eq([['F_n-2','F_{n-1}(F_{n-1}-2)'],
				'(F_0-2)F_0⋯F_{n-1}',
				'F_0⋯F_{n-1}'])),
			'$F_n = 2 + '+prod('i',0,'n-1','F_i','','')+'$ 形式与Sylvester数类似'
			]),
		].join(hr),
		'3,5,17,257,65537,4294967297,18446744073709551617'.split(',').join(br),
		ul(['$前n项和F_0+⋯+F_{n-1}$____=',
			'$前n项倒数和：$____$极限：0.596063172117821⋯无理数$',
			'$前n项积F_0⋯F_{n-1}$____$=F_n-2$',
			
			'$n>1时，费马数F_n的每一个因子形如$____$t⋅2^{n+2}+1（t>0）$____'+scbox('Lucas定理','bold brad'),
		'不同的费马数互素 $(F_m,F_n) = 1$____'+scbox('Goldbach定理','bold brad'),
			SCtv('prov','反证，根据$F_n=F_0⋯F_{n-1}+2$____假设有公因子$d（d>1）则d|2，即d=2$，与费马数都是奇数矛盾！'),
			SCtv('notes','得到推论：素数有无穷多个____（利用费马数列中分别取素因子得到无穷个素数的数列）'),
		'$n>1时，F_n个位数都是7$____'+SCtv('prov','因为16的平方以及平方后继，尾数都是6'),
			ksc(eqv('F_n是素数',mod(msup(3,frac('F_n-1',2,'t'),'',''),-1,'F_n','','',''),2))+scbox('Pépin测试','bold brad')
			])],







	['Proth数',['$k⋅2^n+1（其中k是奇数，且2^n>k）$',''].join(hr),
		'3,5,9,13,17,25,33,41,49,57,65,81,97,113,129,145,161,177,193,209,225,241⋯'.split(',').join(br),
		ul(['特殊类型1：Cullen数 $n⋅2^n+1$',
			'特殊类型2：费马数$'+msups([2,2,'n'],'')+'+1$',
			'特殊类型3：第2类Thabit数$3⋅2^n+1$'
			])],


	['Euclid数',['$E_n=p_n\\#+1$',''].join(hr),
		'3,7,31,211,2311,30031,510511,9699691,223092871,6469693231,200560490131,⋯'.split(',').join(br),
		ul(['最小的Euclid合数：$E_6 = 13\\#+1 = 30031 = 59×509$',
			'$'+mod('E_n',3,4,'','','')+' ⇒$ Euclid数不可能是完全平方数'
			])],


	['Kummer数',['$E_n=p_n\\#-1$',''].join(hr),
		'1,5,29,209,2309,30029,510509,9699689,223092869,6469693229,200560490129,⋯'.split(',').join(br),
		ul([''
			])],


	['Carol数',['$(2^n-1)^2-2$','$4^n-2^{n+1}-1$','$M_{2n}-2^{n+1}$','$M_{2n}-M_{n+1}-1$'].join(hr),
		'−1,7,47,223,959,3967,16127,65023,261119,1046527,⋯'.split(',').join(br),
		ul(['$n是3k+2时$，Carol数不是素数',
			'二进制形式是$n-2个1,0,n+1个1$'
		])],

	['Kynea数',['$(2^n+1)^2-2$','$4^n+2^{n+1}-1$','$4^n+M_{n+1}$','$M_{2n}+M_{n+1}+1$'].join(hr),
		'7,23,79,287,1087,4223,16639,66047,263167,1050623,4198399,16785407,⋯'.split(',').join(br),
		ul(['$n是3k+1时$，Kynea数不是素数',
			'二进制形式是$1,n-1个0,n+1个1$'
		])],

	['Leyland数',['$x^y+y^x$','$x≥y>1$'].join(hr),
		'',
		ul([''
		])],

	['第2类Leyland数',['$x^y-y^x$','$y>x>1$'].join(hr),
		'',
		ul([''
		])],

	['Thabit数____321数',['$3⋅2^n-1$','推广形式：$(b+1)b^n-1$'].join(hr),
		'2,5,11,23,47,95,191,383,767,1535,3071,6143,12287,24575,49151,98303,196607,393215,786431,1572863,⋯'.split(',').join(br),
		ul(['二进制形式是$10,n个1$',
		])],
	['第2类Thabit数____第2类321数',['$3⋅2^n+1$','推广形式：$(b+1)b^n+1$'].join(hr),
		'',
		ul([''
		])],

	['Williams数（出处可能是wiki，但反查没查到）',['$2^n-1$','推广形式：$(b-1)b^n-1$'].join(hr),
		'',
		ul(['',
			'素数$p$都是Williams素数(底数$b=p$)'
		])],
	['第2类Williams数',['$2^n+1$','推广形式：$(b-1)b^n+1$'].join(hr),
		'',
		ul([''
		])],




	['磬[qìng]折形数____曲尺形数____拐尺形数____Gnomon',['$2n+1$'].join(hr),
		'3,5,7,9,11,13,15,17,19'.split(',').join(br),
		ul(['$前n项和：n(n+2)$',
			'$前n项倒数和：'+sum('i',1,'2n+1',frac(1,'i',''),'','')+'-'+frac(1,2,'')+sum('i',1,'n',frac(1,'i',''),'','')+'-1$',
			'$前n项积：(2n+1)!!$',
		'平方数根据磬折形数，得到下一个平方数____$n^2+(2n+1)=(n+1)^2$'])],
		
	['磬折形数（推广）____Gnomon Extended','$1+n(k-2)$',
		'k-1,2k-3,3k-5,4k-7,5k-9,6k-11,7k-13'.split(',').join(br),
		ul(['$前n项和：'+frac('n((n+1)(k-2)+2)',2,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：$',
			'多角形数根据磬折形数，得到下一个多角形数'
			])
		],

	['三角形数____Triangular',[ksc(frac('n(n+1)',2,'')),ksc('C_{n+1}^2'),'递推关系：____$a_1=1$____$a_{n+1}-a_n=n+1$'].join(hr),
		'1,3,6,10,15,21,28,36,45,55'.split(',').join(br),
		ul(['$前n项和：'+frac('n(n+1)(n+2)',6,'')+'$',
			'$前n项倒数和：'+frac('2n','n+1','')+' 极限是2$',
			'$前n项积：'+frac('n!(n+1)!','2^n','')+'$',
			'奇偶周期：奇奇偶偶'
			])
		],
	['正方形数____完全平方数____四角形数____Quadrangular',['$n^2$','递推关系：____$a_1=1$____$a_{n+1}-a_n=2n+1$'].join(hr),
		'1,4,9,16,25,36,49,64,81,100'.split(',').join(br),
		ul(['$前n项和：'+frac('n(n+1)(2n+1)',6,'')+'$',
			'$前n项倒数和： 极限是'+frac('π^2',6,'')+'$',
			'$前n项积：(n!)^2$',
			'平方数等于两个连续三角形数之和____$n^2='+frac('n(n-1)',2,'')+'+'+frac('n(n+1)',2,'')+'=C_n^2+C_{n+1}^2$',
			'平方数等于奇数数列前$n$项和____$n^2=1+3+⋯+(2n-1)$',
			'奇偶周期：奇偶'
			])
		],
	['五边形数',[ksc(frac('n(3n-1)',2,'')),'递推关系：____$a_1=1$____$a_{n+1}-a_n=3n+1$'].join(hr),
		'1,5,12,22,35,51,70,92,117,145'.split(',').join(br),
		ul(['$前n项和：'+frac('n^2(n+1)',2,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：$',
			'五角形数等于同阶四角形数与前一阶三角形数之和____$'+frac('n(3n-1)',2,'')+'=n^2+'+frac('n(n-1)',2,'')+'$',
			'奇偶周期：奇奇偶偶'
			])
		],
	['形数____k边形数____多边形数____多角形数____拟形数____垛积数____Figurate____Polygonal____Stacks',
			[ksc(frac('n(2+(n-1)(k-2))',2,'')),
			ksc(frac('n((n-1)k-2(n-2))',2,'')),
			ksc(frac('n(n(k-2)-(k-4))',2,'')),
			'递推关系：____$a_1=1$____$a_{n+1}-a_n=(k-2)n+1$'].join(hr),
		'1,k,3(k-1),2(3k-4),5(2k-3),3(5k-8),7(3k-5),4(7k-12),9(4k-7),5(9k-16)'.split(',').join(br),
		ul(['$前n项和：'+frac('n(n+1)[(2n+1)(k-2)-3(k-4)]',12,'')+'$____$='+frac('n(n+1)((n-1)k-(2n-5))',6,'')+'$____$='+frac('n(n+1)(n(k-2)-(k-5))',6,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：$',
			'$每一个正整数都可以表示成k个k阶多角形之和$____'+SCtv('notes','Fermat提出，Legendre证明$k=3$的情形，____Lagrange证明$k=4$的情形，Cauchy证明一般情形'),
			'奇偶周期：奇奇偶偶（$k$是奇数时）奇偶（$k$是偶数时）'
			])
		],
	['梯形数____Trapezoidal','不连续的两个三角形数之差','','',''],
	['立方数____Cubic',['$n^3$','递推关系：____$a_1=1$____$a_{n+1}-a_n=3n^2+3n+1$'].join(hr),
		'1,8,27,64,125,216,343,512,729,1000'.split(',').join(br),
		ul(['$前n项和：'+frac('n^2(n+1)^2',4,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：(n!)^3$',
			'$n个连续立方数（从1开始）之和等于第n个三角形数的平方$____$1+2^3+⋯+n^3=(n(n+1)/2)^2$',
			])
		],
	['三棱锥数',[ksc(frac('n(n+1)(n+2)',6,''))].join(hr),'1,4,10,20,35,56,84,120,165,220'.split(',').join(br),
		ul(['$前n项和：'+frac('n(n+1)(n+2)(n+3)',24,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：'+frac('n!(n+1)!(n+2)!','2⋅6^n','')+'$',
			'每个三棱锥数是三角形数列前$n$项和'
			])
		],
	['四棱锥数',[ksc(frac('n(n+1)(2n+1)',6,''))].join(hr),'1,5,14,30,55,91,140,204,285,385'.split(',').join(br),
		ul(['$前n项和：'+frac('n(n+1)^2(n+2)',12,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：'+frac('n!(n+1)!(2n+1)!!','6^n','')+'$',
			'每个四棱锥数是四角形数列前$n$项和'
			])
		],


	['棱锥数____Pyramidal',[ksc(frac('n(n+1)(3+(n-1)(k-2))',6,'')),ksc(frac('n(n+1)((n-1)k-(2n-5))',6,'')),ksc(frac('n(n+1)(n(k-2)-(k-5))',6,''))].join(hr),
		'1,k+1,2(2k-1),10(k-1),5(4k-5),7(5k-7),28(2k-3),12(7k-11),15(8k-13),55(3k-5)'.split(',').join(br),
		ul(['$前n项和：'+frac('n(n+1)(n+2)((k-2)n+6-k)',24,'')+'$',
			'$前n项倒数和：$',
			'$前n项积：$',
			'$每个k棱锥数是k角形数列前n项和$','二棱锥退化为三角形数'
			])
		],


	['长方数____Oblong',['$n(n+k)$','长方形长边的点数比宽边多$k$个','递推关系：____$a_1=k+1$____$a_{n+1}-a_n=2n+1+k$'].join(hr),
		'k+1,2(k+2),3(k+3),4(k+4),5(k+5),6(k+6),7(k+7),8(k+8),9(k+9),10(k+10)'.split(',').join(br),
		ul([ksc('前n项和：'+frac('n(n+1)(2n+1+3k)',6,'')),
			'$前n项倒数和：$',
			'$前n项积：'+frac('n!(n+k)!','k!','')+'=(n!)^2C_{n+k}^k$'
			])
		],



	['毕达哥拉斯数____',['几何体数的推广（by zzllrr）____$m$是几何空间维数____当$m=2$时，得到多边形数____当$m=3$时，得到棱锥数____是$n的m$次多项式',
		ksc(frac('n(n+1)⋯(n+m-2)(n(k-2)-(k-m-2))','m!','')),
		ksc(frac('(m+(n-1)(k-2))C_{n+m-2}^{m-1}','m','')),
		ksc(frac('((n-1)k-2n+m+2)C_{n+m-2}^{m-1}','m','')),
		ksc(frac('((k-2)n+m+2-k)C_{n+m-2}^{m-1}','m',''))
		].join(hr),
		['$1$','$m+k-2$',ksc(frac('(m+2(k-2))(m+1)',2,'')),ksc(frac('(m+3(k-2))(m+2)(m+1)',6,''))].join(br),
		ul(['$前n项和：$',
			'$前n项倒数和：$',
			'$前n项积：$'
			])
		],

	['斐波那契数____Fibonacci',
		[ksc(frac('Φ^n-(1-Φ)^n',root(5,'','',''),'')),
		ksc(frac('Φ^n-(-Φ)^{-n}',root(5,'','',''),'')),
		ksc(frac(lrp('',frac('1+'+root(5,'','',''),2,''),'','')+'^n-'+lrp('',frac('1-'+root(5,'','',''),2,''),'','')+'^n',root(5,'','',''),'')),
		ksc(sum('i',0,zp(frac('n-1',2,''),'⌊⌋'),'C_{n-i-1}^i','','')),
			'递推关系：____$F_0=0$____$F_1 = F_2 = 1$____$F_{n+2} = F_n+F_{n+1}$',
			'$F_{n+1}^2 = F_nF_{n+2}+(-1)^n$',
			'$F_{m+n}^2 - F_{m-n}^2 = F_{2m}F_{2n}$',
			'$F_{m+n} = F_{m-n}F_n+F_mF_{n+1}$',
			'矩阵表示：____$AP^k='+zmtrx([[1,1],[1,0]])+zmtrx([[1,1],[1,2]])+'^k='+zmtrx([['F_{2k+1}','F_{2k+2}'],[0,0]])+'$'
		].join(hr),
		'1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765'.split(',').join(br),
		ul(['$前n项和：'+sum('i',0,'⌊n/2⌋','C_{n-i}^i','','')+'$此公式可能有误！',
		'$前n项和 = F_{n+2}-1$',
		'$前n奇数项和 = F_{2n}$',
		'$前n偶数项和 = F_{2n+1} -1$',
		'$前n偶数项和 - 前n奇数项和 = F_{2n-1} -1$',
		'$前n奇数项和 - 前n偶数项和 = 1- F_{2n-1}$',
		'$前n项倒数和：$',
		'$前n项积：$',
		'$前n项平方和 = F_nF_{n+1}$',
		'$偶数项平方 F_{2n}^2 = F_{2n-1}F_{2n+1}$',
		'$奇数项平方 F_{2n-1}^2 = F_{2n-2}F_{2n}-1$',
		'$前2n-1个相邻项乘积和$____$F_1F_2+F_2F_3+⋯+F_{2n-1}F_{2n} = F_{2n}^2$',
		'$前2n个相邻项乘积和$____$F_1F_2+F_2F_3+⋯+F_{2n}F_{2n+1} = F_{2n+1}^2-1$',
		
		ksc(lim('n','','F_{n+1}/F_n','','')+' = Φ = '+frac(root(5,'','','')+' +1',2,'')+' ≈ 1.618034'),
		ksc(lim('n','','F_{n+a}/F_n','','')+' = Φ^a'),
		ksc(sum('n',1,'+','|F_nΦ-F_{n+1}|','','')+' = Φ','',''),
		
		'相邻两项互素 $(F_n,F_{n+1}) = 1$',
		'$(F_m,F_n) = F_{(m,n)}$',
		'$F_m|F_{mn} 也即 m|n → F_m|F_{mn}$',
		'与Pascal三角关系：____Pascal三角左对齐时，左对角线上的数字和',


		'有11项是素数（是否有其他素数未知）'
		])],
	['广义斐波那契数____generalized Fibonacci',['递推关系：____$F_0=F_1=⋯=F_{m-1}=0$____'+
		'$F_m=1$____$F_{m+n}=F_n+F_{n+1}+⋯+F_{n+m-1}$'].join(hr),'',''],



	['Pell数____',
		[
		].join(hr),
		''.split(',').join(br),
		ul([''
		])],



	['Lucas数____',
		[
			'递推关系：____$L_0=2$____$L_1 = 1$____',
	
		].join(hr),
		'1,3,4,7,11,18,29,47,76,123'.split(',').join(br),
		ul([
		])],


	['Sylvester数____',
		[	ksc('S_n = 1 + '+prod('i',0,'n-1','S_i','','')),
			'递推关系：____$S_0 = 2$____$S_n = S_{n-1}(S_{n-1}-1) + 1$',
			'$S_n = '+zp(msups(['E',2,'n+1'],'')+'+'+frac(1,2,''),'⌊⌋')+'$____其中常数$E≈1.264084735305302$'
		].join(hr),
		'2,3,7,43,1807,3263443,10650056950807,113423713055421844361000443'.split(',').join(br),
		ul([

		])],



],'TBrc').replace(/____/g,br))+




detail('整数（按数位特征）',Table([ZLR('名称 定义 前n项 性质')],[


	['自身数____Self____Colombian____Devlali',['无法表达成任何一个数与其各数位和的和'].join(hr),
		'1,3,5,7,9,20,31,42,53,64,75,86,97,108,110,121,132,143,154,165,176,187,198,209,211,222,233,244,255,266,277,288,299,310,312,323,334,345,356,367,378,389,400,411,413,424,435,446,457,468,479,490,⋯,'.split(',').join(br),
		ul([''
		])],



	['自述数____Self-descriptive',['各数位上的数字正好表示该数中出现该数位序数（从左到右从0开始编号）的次数'].join(hr),
		'1210,2020,21200,3211000,42101000,521001000,6210001000'.split(',').join(br),
		ul(['数位和等于位数'
		])],

	['自传数____Autobiographical____Curious',['与自述数类似，但不限于10位数以内'].join(hr),
		'1210,2020,21200,3211000,42101000,521001000,6210001000,72100001000,821000001000,9210000001000'.split(',').join(br),
		ul(['数位和等于位数'
		])],


	['Smarandache数',['前n个数拼写连接成新数'].join(hr),
		'1,12,123,1234,12345,123456,1234567,12345678,123456789,12345678910,1234567891011,123456789101112,12345678910111213,1234567891011121314,123456789101112131415,⋯,'.split(',').join(br),
		ul(['',
		])],

	['Smarandache–Wellin数',['前n个素数拼写连接成新数'].join(hr),
		'2,23,235,2357,235711,23571113,2357111317,235711131719,23571113171923,2357111317192329,⋯,'.split(',').join(br),
		ul(['',
		])],

	['Primeval数',['数位置换后得到的素数个数>任意比它小的数置换后得到的素数个数'].join(hr),
		('1,2,13,37,107,113,137,1013,1037,1079,1237,1367,1379,10079,10123,10136,10139,10237,10279,10367,10379,12379,13679,⋯,'+
		'相应的得到素数个数：,0,1,3,4,5,7,11,14,19,21,26,29,31,33,35,41,53,55,60,64,89,96,106,⋯,'+
		'可得到最多素数的各位数的Primeval数：,2,37,137,1379,13679,123479,1234679,12345679,102345679,1123456789,10123456789,⋯,'+
		'相应素数个数：,1,4,11,31,106,402,1953,10542,75447,398100,3605464,⋯,'
		
		).split(',').join(br),
		ul(['',
		])],

	['Strobogrammatic数',['数位180度旋转后相同（中心对称）'].join(hr),
		'0,1,8,11,69,88,96,101,111,181,609,619,689,808,818,888,906,916,986,1001,1111,1691,1881,1961,6009,6119,6699,6889,6969,8008,8118,8698,8888,8968,9006,9116,9696,9886,9966,⋯,'.split(',').join(br),
		ul(['',
		])],

	['高兴数____Happy',['反复求各数位平方和，最终得到1'].join(hr),
		('1,7,10,13,19,23,28,31,32,44,49,68,70,79,82,86,91,94,97,100,103,109,129,130,133,139,167,176,188,190,192,193,203,208,219,226,230,236,239,262,263,280,291,293,301,302,310,313,319,320,326,329,331,338,356,362,365,367,368,376,379,383,386,391,392,397,404,409,440,446,464,469,478,487,490,496,536,556,563,565,566,608,617,622,623,632,635,637,638,644,649,653,655,656,665,671,673,680,683,694,700,709,716,736,739,748,761,763,784,790,793,802,806,818,820,833,836,847,860,863,874,881,888,899,901,904,907,910,912,913,921,923,931,932,937,940,946,964,970,973,989,998,1000,⋯,'+
		'剔除含0及重排：1,7,13,19,23,28,44,49,68,79,129,133,139,167,188,226,236,239,338,356,367,368,379,446,469,478,556,566,888,899,⋯,').split(',').join(br),
		ul(['数位重排，插入或移除0，都仍是高兴数',
			'$1,10^n$都是高兴数',
			'第1对连续高兴数是(31,32)',
			'第1个3连高兴数是(1880,1881,1882)',
			'第1个4连高兴数是(7839,7840,7841)',
			'第1个5连高兴数是(44488,)',
			'第1个6连高兴数是(7899999999999959999999996,)',
			'第1个7连高兴数是(7899999999999959999999996,)',
			'任意多个连续高兴数总是存在的',
			'推广：'+ul(['平方和改成奇数次方和时，$'+mod('高兴数',1,3,'','','')+'$',
			])
		])],

	['不高兴数____Unhappy____Sad____on-Happy',['反复求各数位平方和，最终不能得到1'].join(hr),
		('1,7,10,13,19,23,28,31,32,44,49,68,70,79,82,86,91,94,97,100,103,109,129,130,133,139,167,176,188,190,192,193,203,208,219,226,230,236,239,262,263,280,291,293,301,302,310,313,319,320,326,329,331,338,356,362,365,367,368,376,379,383,386,391,392,397,404,409,440,446,464,469,478,487,490,496,536,556,563,565,566,608,617,622,623,632,635,637,638,644,649,653,655,656,665,671,673,680,683,694,700,709,716,736,739,748,761,763,784,790,793,802,806,818,820,833,836,847,860,863,874,881,888,899,901,904,907,910,912,913,921,923,931,932,937,940,946,964,970,973,989,998,1000,⋯,'+
		'剔除含0及重排：1,7,13,19,23,28,44,49,68,79,129,133,139,167,188,226,236,239,338,356,367,368,379,446,469,478,556,566,888,899,⋯,').split(',').join(br),
		ul(['数位重排，插入或移除0，都仍是不高兴数',
			'$2⋅10^n$都是不高兴数',
			'不高兴数反复求各数位平方和，____最终得到循环数列4,16,37,58,89,145,42,20',
			'推广：'+ul(['平方和改成3次方和，不高兴数有下列8种情况：',
					ul(['得到153,370,371,407之一（自循环）'+
						ksc(piece([[153,'当3|n时'],
							['371或407','当'+mod('n',2,3,'','','')+'时'],
							[370,'当'+mod('n',1,3,'','','')+'时']
						])),
						'得到循环数列133,55,250',
						'得到循环数列217,352,160',
						'得到循环数列1459,919',
						'得到循环数列136,244',
					]),
					
				'平方和改成4次方和，不高兴数有下列情况：',
					ul(['得到1634,8208,9474之一（自循环）',
						'得到循环数列13139,6725,4338,4514,1138,4179,____9219,13139,6725,4338,4514,1138,4179,9219',
						'得到循环数列2178,6514',
					]),
					
				''
			])
		])],

	['Harshad数____Niven',['可被数位和整除'].join(hr),
		'1,2,3,4,5,6,7,8,9,10,12,18,20,21,24,27,30,36,40,42,45,48,50,54,60,63,70,72,80,81,84,90,100,102,108,110,111,112,114,117,120,126,132,133,135,140,144,150,152,153,156,162,171,180,190,192,195,198,200,⋯,'.split(',').join(br),
		ul(['',
		])],

	['Harshadmorphic数____Nivenmorphic',['存在一个Harshad数H, 其数位和等于n，且H以n结尾'].join(hr),
		'除了11都是'.split(',').join(br),
		ul(['',
		])],

	['重1数____Repunit',['数位全为1',ksc(frac('10^n-1',9,'')),'记作$R_i$'].join(hr),'1,11,111,⋯,'.split(',').join(br),
		ul(['11⋯11（偶数个） = 11‧',
			'111（3） = 3‧37',
			'11111（5） = 41‧271',
			'1111111（7） = 239‧4649',
			'R11 = 21649‧513239',
			'R13 =  53‧79‧265371653',
			'R17 =  2071723‧5363222357',

			'R29 = 3191‧16763‧43037‧62003‧____77843839397',
			'R31 = 2791‧6943319‧____57336415063790604359',
			'R37 = 2028119‧247629013‧____2212394296770203368013',
			'R41 = 83‧1231‧538987‧____201763709900322803748657942361',
			'R43 = 173‧1527791‧____1963506722254397‧____2140992015395526641',
			'R47 = 35121409‧____316362908763458525001406154038726382279',
			'R53 = 107‧1659431‧____1325815267337711173‧____47198858799491425660200071',
			'R59 = 2559647034361‧____4340876285657460212144_____534289928559826755746751',
			'R61 = 733‧4637‧329401‧____974293‧1360682471‧____106007173861643‧____7061709990156159479',
			'R67 = 493121‧____79863595778924342083‧____28213380943176667001263153660999177245677',
			'R71 = 241573142393627673576957439049‧____45994811347886846310221728895223034301839',
			'R73 = 12171337159‧1855193842151350117‧____49207341634646326934001739482502131487446637',
			'R79 = 317‧6163‧10271‧307627‧____49172195536083790769‧____3660574762725521461527140564875080461079917',
			'R83 = 3367147378267‧____9512538508624154373682136329‧____346895716385857804544741137394505425384477',
			'R89 = 497867‧103733951‧____104984505733‧____5078554966026315671444089‧____403513310222809053284932818475878953159',
			'R97 = 12004721‧____846035731396919233767211537899097169‧____1093998468553705375403392668_____42070119107662296580348039',
			'R101 = 4531530181816613234555190841‧____129063282232848961951985354966759‧____18998088572819375252842078421374368604969',
			'R103 = 1031‧7034077‧____153211620887015423991278431_____667808361439217294295901387715486‧$‧____473457925534859044796980526236853',
			'R107 = 643‧999809‧9885089‧____215257037‧2386760191‧____511399538427507881‧____646826950155548399‧____102880794672225387_____91302311556310051849',
			'R109 = 1192679‧____712767480971213008079‧____5295275348767234696493‧____246829743984355435962408390910_____378218537282105150086881669547',
			'R113 = 227‧908191467191‧____538957123122177190652671034266_____853972984987051734492265550033‧$‧____468818785237057810_____79015749721646701723',
			href(Hs+'books.google.com.hk/books?id=YZDhBQAAQBAJ&pg=PA49&lpg=PA49&dq=11111111111111111+factors&source=bl&ots=69t7mL65E1&sig=CZTccVwait54pNcNZb6Hetbt_iQ&hl=en&sa=X&redir_esc=y#v=onepage&q=11111111111111111%20factors&f=false','更多结论'),
		])
		],

	['数位重复数____Repdigit',['重1数的倍数',''].join(hr),'个位数,11,22,⋯,666,⋯,'.split(',').join(br),
		ul([''
		])
		],

	['Demlo数',['Repunit数的平方',''].join(hr),'1,121,12321,⋯,'.split(',').join(br),
		ul([''
		])
		],


	['101数by zzllrr',['$10^n+1$','$首尾各1个1，中间i个0$','记作$Z_i$'].join(hr),'1,11,101,1001,⋯,'.split(',').join(br),
		ul([['Z2 = 1001 = 7‧11‧13','每3位一组，奇偶组和之差0','周期+6个0，即中间0个数2,8,14,20,⋯'].join(br),
			['Z3 = 10001 = 73‧137','每4位一组，奇偶组和之差0','周期+8个0，即中间0个数3,11,19,27,⋯'].join(br),
			['Z4 = 11‧9091','每3位一组，奇偶组和之差99','每5位一组，奇偶组和之差0','周期+10个0，即中间0个数4,14,24,34,⋯'].join(br),
			['Z5 = 101‧9901','每6位一组，奇偶组和之差0','周期+12个0，即中间0个数5,17,29,41,⋯'].join(br),
			['Z6 = 11‧909091','每3位一组，奇偶组和之差11','每7位一组，奇偶组和之差0','周期+14个0，即中间0个数6,20,34,48,⋯'].join(br),
			['Z7 = 17‧5882353','每8位一组，奇偶组和之差0','周期+16个0，即中间0个数7,23,39,55,⋯'].join(br),
			['Z8 = (7‧11‧13)‧19‧52579','每3位一组，奇偶组和之差0','每9位一组，奇偶组和之差0','周期+18个0，即中间0个数8,26,44,62,⋯'].join(br),
			['Z9 = 101‧3541‧27961','每6位一组，奇偶组和之差9999=101‧99','每10位一组，奇偶组和之差0','周期+20个0，即中间0个数9,29,49,69,⋯'].join(br),
			['Z10 = 11^2‧23‧4093‧8779','每3位一组，奇偶组和之差99','每11位一组，奇偶组和之差0','周期+22个0，即中间0个数10,32,54,76,⋯'].join(br),
			['Z11 = (73‧137)‧99990001','每4位一组，奇偶组和之差0','每12位一组，奇偶组和之差0','周期+24个0，即中间0个数11,35,59,83,⋯'].join(br),
			['Z12 = 11‧','每3位一组，奇偶组和之差11','每13位一组，奇偶组和之差0','周期+26个0，即中间0个数12,38,64,90,⋯'].join(br),
			['Z13 = 101‧29‧281‧121499449','每6位一组，奇偶组和之差101','每14位一组，奇偶组和之差0','周期+28个0，即中间0个数13,41,54,82,⋯'].join(br),
			['Z15 = 353‧449‧641‧1409‧69857','每16位一组，奇偶组和之差0','周期+32个0，即中间0个数15,47,79,111,⋯'].join(br),
			['Z17 = 101‧','每6位一组，奇偶组和之差0','每18位一组，奇偶组和之差0','周期+36个0，即中间0个数17,53,89,⋯'].join(br),
			['Z19 = (73‧137)‧','每4位一组，奇偶组和之差0','每20位一组，奇偶组和之差0','周期+40个0，即中间0个数19,59,99,⋯'].join(br),

			['Z23 = (17‧5882353)‧','每8位一组，奇偶组和之差0','每24位一组，奇偶组和之差0','周期+48个0，即中间0个数23,71,119,⋯'].join(br),

			['2(1+2m)k+2m个0','即偶数个0 = 11‧','每1位一组，奇偶组和之差是11倍数','每3位一组，奇偶组和之差0,99=11‧9,11'].join(br),
			['4(1+2m)k+(4m+1)个0','即4m+1个0 = 101‧','每2位一组，奇偶组和之差是101倍数','每6位一组，奇偶组和之差0,9999=101‧99,101'].join(br),
			['8(1+2m)k+(8m+3)个0','即8m+3个0 = Z3(73‧137)‧','每4位一组，奇偶组和之差是10001倍数'].join(br),
			['16(1+2m)k+(16m+7)个0','即16m+7个0 = Z7(17‧5882353)‧','每8位一组，奇偶组和之差是Z7倍数'].join(br),

			['继续猜测'].join(br),
			['32(1+2m)k+(32m+15)个0','即32m+15个0 = Z15(353‧449‧641‧1409‧69857)‧','每16位一组，奇偶组和之差是Z15倍数'].join(br),


			['$2^s(1+2m)k+(2^sm+2^{s-1}-1)个0$',
				'即$2^sm+2^{s-1}-1个0 = Z_{2^{s-1}-1}‧$',
				'每$2^{s-1}位一组，奇偶组和之差是Z_{2^{s-1}-1}$倍数'].join(br),
	
			'已验证1(16777216个0)1以内无11,101之外的素数',
		])
		],


	['回文数____Palindromic number____numeral palindrome',['数位对称（逆序后相同）',''].join(hr),['个位数','11,22,33,⋯,99','101,111,121,⋯,999'].join(br),ul(['前n项倒数和：极限收敛于3.37028...'])],
		
	['Lychrel数','数字逆序后相加（称为196算法），____如此反复操作得不到回文数____'+SCtv('notes','数学家Wade Van Landingham____借用其女友名Cheryl逆序后改造'),[''].join(hr),
		['猜测有：','196（已迭代10亿次）', 295, 394, 493, 592, 689, 691, 788, 790, 879, 887, 978, 986, 1495, 1497, 1585, 1587, 1675, 1677, 1765, 1767, 1855, 1857, 1945, 1947, 1997].join(br),
		ul(['逆序后仍是Lychrel number',
		'1万以内，约80%不超过4步得到回文数','1万以内，约90%不超过7步得到回文数','1万以内，已知步数最多的是89（24步），得到8813200023188',
		'10911得到4668731596684224866951378664（55步）',
		'1186060307891929990得到119位回文数（261步）'+href(H+'jasondoucette.com/worldrecords.html#solved','详细记录'),
		'1999291987030606810得到119位回文数（261步）'+br+'已知最大的，此类数已知有126个）',
		'261步以内，尚未发现223，224，237～258步得到回文数的数字',
		Table([['进制','最小可能Lychrel数（该进制下）']],[['2','10110已证明是'],['3','10201'],[4,3333],[5,10313],[6,4555],[7,10513],[8,1775],[9,728],[10,196],
			[11,'83A'],[12,179],[13,'CCC'],[14,'1BB'],[15,'1EC'],[16,'19D'],[17,'B6G'],[18,'1AF'],
			],'TBrc')])],

	['水仙花数____',['一个3位数，自身等于数位立方和',''].join(hr),[153,'⋯'].join(br),ul([''])],

	['自幂数____',['一个n位数，自身等于数位幂和',''].join(hr),[0,1,153,'⋯'].join(br),ul([''])],

],'TBrc').replace(/____/g,br))+




detail('整数（按与其余整数的关系）',Table([ZLR('名称 定义 前n项 性质')],[

	['Interprime数\n',['两连续奇素数的算术平均数'].join(hr),
		'4,6,9,12,15,18,21,26,30,34,39,42,45,50,56,60,64,69,72,76,81,86,93,99,⋯,'.split(',').join(br),
		ul(['',
		])],

	['幸运数____Lucky',['正整数列反复筛除','第k次筛除数列中编号是k+1倍数的数','与素数筛不同之处在于：','按序号而不是按数值剔除'].join(br),
		'1,3,7,9,13,15,21,25,31,33,37,43,49,51,63,67,69,73,75,79,87,93,99,105,111,115,127,129,⋯,'.split(',').join(br),
		ul(['',
			ol([''],'unknown')
		])],

],'TBrc').replace(/____/g,br))

);
