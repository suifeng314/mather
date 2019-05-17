/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Partial Order']=Kx(

detail('偏序关系',Table([ZLR('名称 记法 定义 性质')],[

	ZLR('小于等于____≼____xRy ⇔ x≼y____','','____'),
	ZLR('严格小于____≺____x≺y ⇔ x≼y∧x≠y','','____'),
	ZLR('可比\ncomparable____xy可比____x≼y∨y≼x','','____'),
	ZLR('覆盖\ncover____y覆盖x____ x≺y∧(∄z)(x≺z∧z≺y)','','____'),
	ZLR('链B\nChain________'+kxA(['B中元素都可比','长度'+eq('def')+'|B|']),'','____'),
	ZLR('反链B\nAntichain________'+kxA(['B中元素都不可比','(除了自身可比外)','长度'+eq('def')+'|B|']),'','____'),
	ZLR('最大元____x____(∀y)y≼x____'+kul(['不一定存在','存在 → 唯一']),'','____'),
	ZLR('最小元____x____(∀y)x≼y____'+kul(['不一定存在','存在 → 唯一']),'','____'),
	ZLR('极大元____x____'+khrA(['(∀y)xy可比 → y≼x','(∀y)x≼y → y=x'])+'____'+kul(['不一定存在','非空有限偏序集 → 存在','可能不唯一','唯一 → 最大元']),'','____'),
	ZLR('极小元____x____'+khrA(['(∀y)xy可比 → x≼y','(∀y)y≼x → y=x'])+'____'+kul(['不一定存在','非空有限偏序集 → 存在','可能不唯一','唯一 → 最小元']),'','____'),
	ZLR('上界____x∈A____(∀y)y∈B → y≼x____'+kul(['不一定存在','可能不唯一','B中上界存在 → 唯一 \\\\ ⇒ 为B中最大元 \\\\ ⇒ 为B中极大元，即'+kxf('lub')]),'','____'),
	ZLR('下界____x∈A____(∀y)y∈B → x≼y____'+kul(['不一定存在','可能不唯一','B中下界存在 → 唯一 \\\\ ⇒ 为B中最小元 \\\\ ⇒ 为B中极小元，即'+kxf('glb')]),'','____'),
	ZLR('上确界\n最小上界____'+kxf('lub')+'____上界集合的最小元____'+kul(['不一定存在','存在 → 唯一']),'','____'),
	ZLR('下确界\n最大下界____'+kxf('glb')+'____下界集合的最大元____'+kul(['不一定存在','存在 → 唯一']),'','____'),
	ZLR('拓扑排序________从偏序求相容全序____'+kul([kxA(['算法：','找一个极小元，然后删除，','反复如此，','依次排列被删除的极小元']),'拓扑排序可能不唯一']),'','____'),
	ZLR('格________'+piece(['偏序集，','且任两个元素都有上下确界'])+'____例： < I^+,|>， < P(A),⊆>','','____')


],'wiki').replace(/\n/g,br))
);