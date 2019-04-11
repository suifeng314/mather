/*
 * zzllrr Mather
 * Copyright by zzllrr since 2013. All rights reserved.
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['group']=Kx(


detail('群 Group',Table([['名称','记法','定义','性质']],[
	ZLR('群\nGroup____ < G,*>____封闭性，结合律，单位元，可逆____','','____'),
	ZLR('子群\nSubgroup____ < S,*>____非空子集，且是群____'+
		'平凡子群'+piece([' < e,*>','< G,*>'])+'____','','____'),
	ZLR('群同态\nGroup Homomorphism____ < G,*> ≃  < H,∘>____'+kbrA(['< G,*>\\xrightarrow ψ< H,∘>',
		'∀a,b∈G，有ψ(a*b) = ψ(a)∘ψ(b)'])+'____'+
		kxA(['群同态'+piece(['单一群同态'+kbox('Group Monomorphism')+eq('def')+'ψ是单射',
				'满群同态'+kbox('Group Surjective Homomorphism')+eq('def')+'ψ是满射',
				'群同构'+kbox('Group Isomorphism')+eq('def')+'ψ是双射']),
			'群同态 ⇒'+piece(['e是幺元 → ψ(e)是幺元',
						'ψ(a^{-1}) = (ψ(a))^{-1}',
						'同态象 < ψ(G),∘>是 < H,∘>的子群']),
			'群G \\xrightarrow{满同态} H ⇒ H是群'])+'____','','____'),
	ZLR('群同构\nGroup Isomorphism____ < G,*> ≅  < H,∘>____同态映射ψ是双射____','','____'),
	ZLR('置换群（变换群）\n','','____'),
	ZLR('交换群（阿贝尔群）\nCommutative Group\nAbel Group____ < G,*>____满足交换律____群G是交换群 ⇔ ∀a，b∈G，有(a*b)^2 = a^2*b^2','','____'),
	ZLR('循环群\nCyclic Group____ < a>____'+
		kxA(['群G中任一元素都可表示为a^i(i∈I)','生成元'+eq('def')+'a','生成集'+kbox('Generating Set')+eq('def')+'生成元的集合'])+'____'+
		kxA(['群 ⇒ 必有循环子群',
		'循环群 ⇒'+piece(['交换群',
						'阶 = 生成元的周期',
						'只有两类'+
							piece(['无限阶：整数加法群 < I,+> \\\\ → 有且仅有两个生成元±1',
							'有限阶：n阶剩余类加群 \\\\ → '+
								piece(['阶是素数 → 除了幺元都是生成元',
									'生成元的x次幂a^x也是生成元',
									'（x与n互素）',
									kxA(['子群与n的因子d一一对应，','且子群阶等于d，','子群生成元为a^x，','其中x = n/d'])
								])
							]),
						'子群 → 循环群'
					]),
		'阶是素数 ⇒ '+piece(['循环群','只有平凡真子群'])
		])+'____','','____'),
	ZLR('模H同余关系____'+kmod('a','b','H')+'____∀a，b∈G，有a*b^{-1}∈H____'+kxA(['x*a^{-1}∈H ⇔ x∈Ha（右陪集）','a^{-1}*x∈H ⇔ x∈aH（左陪集）',
		'同余 ⇒'+piece(['等价关系'])]),'','____'),
	ZLR('左陪集\nLeft coset____aH____'+kxA(['\\{a*h∣∀h∈H\\}','左陪集代表元',kbox('Representative Element')+eq('def')+'a'])+'____','','____'),
	ZLR('右陪集\nRight coset____Ha____\\{h*a∣∀h∈H\\}','','____'),
	ZLR('拉格朗日定理\\\\ '+kbox('Lagranges Theorem')+'____|H|∣|G|____'+kxA(['子群H的阶整除该有限群G的阶','G内H的指数'+eq('def')+'|G|/|H| = H左（右）陪集数'])+'____'+
		'有限群(n阶) ⇒'+piece(['任一元素的周期都能整除n','任一元素的n次幂都等于单位元']),'','____'),
	ZLR('同态核\nker f____\\ker f____'+kxA(['f是满同态','e\'是G_1的单位元','\\{a|a∈G且f(a) = e\'\\}'])+'____同态核\\ker f ⇒ 不变子群','','____'),
	ZLR('象集____f(G)____\\{f(a)|a∈G\\}','','____'),
	ZLR('不变子群（正规子群）____H____子群H，(∀a∈G)aH = Ha（左右陪集相等）____'+kxA(['不变子群 ⇔ a*h*a^{-1}∈H','(其中∀a∈G, h∈H）'])+'____'+
		piece(['平凡子群','交换群的子群','同态核\\ker f'],1)+' ⇒ 不变子群','','____'),
	ZLR('商群____ < G/H,⊙>____'+kxA(['H是不变子群',
			'G/H是所有的陪集组成的集合',
			'aH⊙bH = (a*b)H'])+'____'+kxA(['|G/H| = |G|/|H|','群与它的任何商群同态','同态核K，商群 < G/K,⊙>与群 < G____1,∘>同构','即在同构的意义下，一个群只能和它的商群同态']),'','____')

],'wiki').replace(/\n/g,br))

);