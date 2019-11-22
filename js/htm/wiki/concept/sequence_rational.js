/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Number/Sequence/Rational']=Kx(

	
detail('有理数列',Table([ZLR('名称 定义 第n项 前n项 性质')],[

	['等差数列\n算术数列\narithmetic progression','公差d',khrA([kxA(['递推关系：','a_1=a',piece(['a_n=a+(n-1)d','a_n=a_{n-1}+d','a_n-a_{n-1}=d'])])]),
		kbrA(ZLR('a a+d a+2d a+3d ⋯ a+(n-1)d')),
		kul(['前n项和：'+Eq([['S_n',frac('(a+a_n)n',2,'')],frac('(2a+(n-1)d)n',2,''),'na+'+frac('n(n-1)',2,'')+'d',frac('2a-d',2,'')+'n+'+frac('d',2,'')+'n^2'])+
				'\\\\ 证明：数列逆序，与原数列相加',
			'前n项倒数和：',
			kxA(['前n项积：','a^n+'+frac('n(n-1)',2,'')+'a^{n-1}+⋯']),
			'a_{n-k}+a_{n+k} = 2a_n',
			sum('i',1,'n+1','a_iC_n^{i-1}','','')+' = (a+a_{n+1})2^{n-1} = (2a+nd)2^{n-1}',
			sum('i',1,'n+1','(-1)^{i-1}a_iC_n^{i-1}','','')+' = 0',
			sum('i',1,'k-1',frac(1,'a_ia_{i+1}',''),'','')+' = '+frac('k-1','a_1a_k',''),
			'{a_n+b}是等差数列，公差是d',
			'{a_nb}是等差数列，公差是bd',
			lrp('{',frac(1,'a_n',''),'}','')+'是调和数列',
			])],
	['等比数列\n几何数列\ngeometric progression',kbrA(['公比q','一般只讨论q≠1的情况','q=1时退化为常数数列','|q| < 1时，称为递缩等比数列',kbox('shrink geometric progression')]),
		khrA([kxA(['递推关系：','a_1=a',piece(['a_n=aq^{n-1}','a_n=a_{n-1}q',frac('a_n','a_{n-1}','')+'=q'])])]),
		kbrA(['a','aq','aq^2','aq^3','⋯','aq^{n-1}']),
		kul(['前n项和：'+
			kxA([Eq([['S_n',frac('a-a_nq','1-q','')],frac('a-a_{n+1}','1-q',''),'a'+frac('1-q_n','1-q','')]),
				'证明：数列×q，错位相减',
				'极限'+piece([[frac('a','1-q',''),'|q| < 1时'],['不存在','|q|≥1时']])]),
			'前n项倒数和：',
			kxA(['前n项积：','a^n+q^{'+frac('n(n-1)',2,'t')+'}']),
			'a_{n-k}a_{n+k} = a_n^2',
			sum('i',1,'n+1','a_iC_n^{i-1}','','')+' = (a+a_{n+1})2^{n-1} = a_1+q^n',
			sum('i',1,'n+1','(-1)^{i-1}a_iC_n^{i-1}','','')+' = a_1-q^n',
			sum('i',1,'k-1',frac(1,'a_ia_{i+1}',''),'','')+' = '+frac('k-1','a_1a_k',''),
			'\\{a_nb\\}是等比数列，公比是q',
			lrp('{',frac(1,'a_n',''),'}','')+'是等比数列，公比是'+frac(1,'q',''),
			])],
	['调和数列\nharmonic progression','',
		khrA([kxA(['递推关系：','a_1=a',''])]),
		'',
		kul(['前n项和：',
			'前n项倒数和：'+Eq([['S_n',frac('(a+a_n)n',2,'')],frac('(2a+(n-1)d)n',2,''),'na+'+frac('n(n-1)',2,'')+'d',frac('2a-d',2,'')+'n+'+frac('d',2,'')+'n^2']),
			'前n项积：',
			frac(1,'a_{n-k}','')+'+'+frac(1,'a_{n+k}','')+' = 2'+frac(1,'a_n',''),
			'a_n = '+frac(2+'a_{n-k}a_{n+k}','a_{n-k}+a_{n+k}',''),
			sum('i',1,'n+1','a_iC_n^{i-1}','','')+' = (a+a_{n+1})'+'2^{n-1} = (2a+nd)'+'2^{n-1}',
			sum('i',1,'n+1','(-1)^{i-1}a_iC_n^{i-1}','','')+' = 0',
			sum('i',1,'k-1',frac(1,'a_ia_{i+1}',''),'','')+' = '+frac('k-1','a_1a_k',''),

			lrp('{',frac(1,'a_n',''),'}','')+'是等差数列',
			])],



	['伯努利数\nBernoulli','',
		khrA([Eq([['B_n',sum('j',0,'n','(-1)^jC_{n+1}^{j+1}'+frac('n!','(n+j)!','')+sum('k',0,'j','(-1)^{j-k}C_j^kk^{n+j}','',''),'','')],
		frac('(-1)^j','j+1','')+sum('k',0,'j','(-1)^{j-k}C_j^kk^n','',''),
		frac('(-1)^k','k+1','')+sum('j',0,'k','(-1)^{k-j}C_k^jj^n','','')]),
		kxA(['递推关系：','B_0 = 1','B_n = '+sum('k',0,'n','C_n^kB_k','','')+' ⇔ '+sum('k',0,'n-1','C_n^kB_k','','')+' = 0（n≥2）']),
		'推导过程：指数型母函数'+frac('x','e^x-1','')+' = '+sum('n',0,'∞',frac('B_n','n!','')+'x^n','','')]),
		kbrA(['1, -'+frac(1,2,'t'),frac(1,6,'t')+', 0','-'+frac(1,30,'t')+', 0',frac(1,42,'t')+', 0','-'+frac(1,30,'t')+', 0',frac(5,66,'t')+', 0']),
		kul(['前n奇数项和：','前n奇数项倒数和：','前n奇数项积：','奇数项为0（B_1除外）', sum('n',1,'',frac(1,'n^{2k}','')+' = (-1)^{k+1}'+frac('(2π)^{2k}B_{2k}','2(2k)!',''),'','')+'（k≥1）',
		lim('k','',frac(zp('B_{2k}','||'), frac('2k!','2^{2k-1}π^{2k}','t'),''),'','')+' = 1'])],
	
	['两连续自然数乘积倒数数列','',
		khrA([frac(1,'n(n+1)',''),kxA(['递推关系：','a_1='+frac(1,2,''),'a_n='+frac('n-1','n+1','')+'a_{n-1}='+lrp('','1-'+frac(2,'n+1',''),'','')+'a_{n-1}'])]),
		kbrA([frac(1,2,''),frac(1,6,''),frac(1,12,''),frac(1,20,''),'⋯',frac(1,'n(n+1)','')]),
		kul(['前n项和：1-'+frac(1,'n+1','')+'='+frac('n','n+1',''),'前n项倒数和：'+frac(1,3,'')+'n(n+1)(n+2)','前n项积：n!(n+1)!=(n+1)'+'(n!)^2'])],
		
	['九连环数列',kbrA(['解开n个环所需步数']),
		khrA([frac('2^{n+1}-k',3,'')+'其中k='+piece([[1,'当n是奇数时'],[2,'当n是偶数时']]),
			kxA(['递推关系：',piece([['a_n=2a_{n-1}','当n是偶数时'],['a_n=2a_{n-1}+1','当n是奇数时']])])
			]),
		kbrA([1,2,5,10,21,42,85,170,341,'⋯']),
		kul(['前n项和：','前n项倒数和：','前n项积：']),
	]
],'wiki').replace(/\n/g,br))+


detail('数对类型',Table([ZLR('名称 定义 第n对 前n对 性质')],[

	['亲和数\n互完数\nAmicable','任一数的真因子之和等于另一数','',kbrA(['220,284','1184,1210','2620,2924','⋯','详见《亲和数表》']),''],
	['孪生素数\nTwin primes','p,p+2均是素数','',kbrA(['3,5','5,7','11,13','17,19','⋯']),''],
	['三生素数\n','p,p+2,p+4均是素数','',kbrA(['3,5,7']),''],
	['勾股数\n毕达哥拉斯数\nPythagorean triple',kbrA(['a^2+b^2=c^2','三者互素时，称为本原勾股数组(PPT)']),'',
		kbrA(['3,4,5','5,12,13','7,24,25','9,40,41','11,60,61','13,84,85','15,8,17','⋯','45,28,53','⋯']),
		kbrA([
		'所有本原勾股数组满足公式：',
		piece(['a=st','b='+frac('s^2-t^2',2,''),'c='+frac('s^2+t^2',2,'')]),
		'其中s,t,a,c都是奇数',
		'满足性质：'+piece(['a,b中有且仅有1个是3的倍数','3∤c']),
		'有相同c值的例子：(33,56,65), (16,63,65)'
		])
	],

],'wiki').replace(/\n/g,br))+


detail('阵型',Table([ZLR('名称 记法 定义 性质')],[
	['杨辉三角____帕斯卡三角____Young Hui triangle____Pascal triangle','','',''],
	['W三角','','','']

],'wiki').replace(/____/g,br))


);