JsOsaDAS1.001.00bplist00�Vscripto= v a r   a p p   =   A p p l i c a t i o n ( ' O m n i f o c u s ' ) 
 a p p . i n c l u d e S t a n d a r d A d d i t i o n s   =   t r u e 
 
 v a r   b o o k T i t l e   =   a p p . d i s p l a y D i a l o g ( '����QeNfT ' ,   {   d e f a u l t A n s w e r :   " "   } ) . t e x t R e t u r n e d 
 v a r   r e a d P e r D a y   =   p a r s e I n t ( a p p . d i s p l a y D i a l o g ( '����Qek�k!��R����uep ' , {   d e f a u l t A n s w e r : 1 0 } ) . t e x t R e t u r n e d ) 
 v a r   b o o k P a g e s   =   p a r s e I n t ( a p p . d i s p l a y D i a l o g ( '����QeNfv�`;�uep ' ,   {   d e f a u l t A n s w e r :   1 0 0   } ) . t e x t R e t u r n e d ) 
 
 v a r   t a s k C o u n t   =   M a t h . c e i l ( b o o k P a g e s   /   r e a d P e r D a y ) 
 a p p . d i s p l a y D i a l o g ( `f/T&R^�   $ { t a s k C o u n t }N*N�R� ? ` ) 
 
 
 a p p . d e f a u l t D o c u m e n t . i n b o x T a s k s . p u s h ( a p p . I n b o x T a s k ( { n a m e : `���   $ { b o o k T i t l e } ` } ) ) 
 
 v a r   p a r e n t T a s k   =   a p p . d e f a u l t D o c u m e n t . i n b o x T a s k s [ a p p . d e f a u l t D o c u m e n t . i n b o x T a s k s . l e n g t h   -   1 ] ; 
 
 v a r   s t a r t   =   0 ; 
 v a r   e n d   =   0 ; 
 f o r ( v a r   i   =   0 ; i   <   t a s k C o u n t ; i + + ) { 
 	 s t a r t   =   i   *   r e a d P e r D a y + 1 ; 
 	 e n d   =   M a t h . m i n ( s t a r t   +   r e a d P e r D a y   -   1 ,   b o o k P a g e s ) 
 	 p a r e n t T a s k . t a s k s . p u s h ( a p p . I n b o x T a s k ( { n a m e : `���   $ { b o o k T i t l e }  {, $ { s t a r t } - $ { e n d }�u ` } ) ) 
 } 
 
                              �jscr  ��ޭ